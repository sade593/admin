<template>
  <div>
    <main class="py-10">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">გვერდების რეგისტრაცია</h1>

      <div class="flex justify-between items-center mb-6">
        <button class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          + ახალი გვერდი
        </button>

        <div class="flex items-center space-x-2">
          <input
            v-model="search"
            type="text"
            placeholder="ძიება..."
            class="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th class="px-6 py-3">#</th>
              <th class="px-6 py-3">დასახელება</th>
              <th class="px-6 py-3 text-center">რედაქტირება</th>
              <th class="px-6 py-3 text-center">წაშლა</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="page in paginatedPages"
              :key="page.id"
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="px-6 py-3 text-gray-700">{{ page.id }}</td>

              <td class="px-6 py-3 font-medium text-blue-600">
                <RouterLink :to="pageLink(page)" class="hover:text-blue-800 transition">
                  {{ page.title }}
                </RouterLink>
              </td>

              <td class="px-6 py-3 text-center">
                <RouterLink
                  v-if="page.title === 'სიახლეები'"
                  :to="`/news/edit/${page.id}`"
                  class="text-blue-600 hover:text-blue-800 transition"
                >
                  <i class="fas fa-pen"></i>
                </RouterLink>

                <RouterLink
                  v-else
                  :to="`/pages/edit/${page.id}`"
                  class="text-blue-600 hover:text-blue-800 transition"
                >
                  <i class="fas fa-pen"></i>
                </RouterLink>
              </td>

              <td class="px-6 py-3 text-center">
                <button class="text-red-500 hover:text-red-700 transition" @click="deletePage(page.id)">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="flex justify-between items-center px-6 py-4 border-t text-sm text-gray-600">
          <span>Showing {{ start + 1 }} to {{ end }} of {{ filteredPages.length }} entries</span>

          <div class="flex space-x-2 items-center">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-3 py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>

            <button
              v-for="pageNumber in pageButtons"
              :key="pageNumber + '-' + currentPage"
              :disabled="pageNumber === '...'"
              @click="pageNumber !== '...' && goToPage(pageNumber)"
              :class="[
                'px-3 py-1 border rounded text-sm',
                pageNumber === '...'
                  ? 'bg-white text-gray-400 cursor-default'
                  : pageNumber === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
              ]"
            >
              {{ pageNumber }}
            </button>

            <button
              @click="nextPage"
              :disabled="end >= filteredPages.length"
              class="px-3 py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const search = ref("");
const currentPage = ref(1);
const perPage = 10;

const pages = ref([
  { id: 1, title: "მთავარი", route: "/main-menu" },
  { id: 2, title: "კომპანიის შესახებ", route: "/main-menu" },
  { id: 3, title: "მედიაცენტრი", route: "/main-menu" },
  { id: 4, title: "პროექტები", route: "/main-menu" },
  { id: 5, title: "ტენდერები", route: "/main-menu" },
  { id: 6, title: "კანონმდებლობა", route: "/main-menu" },
  { id: 7, title: "სიახლეები", route: "/main-menu" },
  { id: 8, title: "online გადახდა", route: "/main-menu" },
  { id: 9, title: "ახალი აბონენტი", route: "/main-menu" },
  { id: 10, title: "სერვისის ცენტრები", route: "/main-menu" },
  { id: 11, title: "შეამოწმე შენი მრიცხველი", route: "/main-menu" },
  { id: 12, title: "ახალი აბონენტის რეგისტრაცია", route: "/main-menu" },
  { id: 13, title: "ინფორმაცია მომხმარებელს", route: "/main-menu" },
  { id: 14, title: "გამრიცხველიანდი", route: "/main-menu" },
  { id: 15, title: "სხვა პროექტები", route: "/main-menu" },
  { id: 16, title: "ქალაქ ბორჯომში ტექნიკურ სამუშაოებთან დაკავშირებით", route: "/main-menu" },
  { id: 17, title: "ეკატერინე გალდავა", route: "/main-menu" },
  { id: 18, title: "დაბა კაზრეთში დაგეგმილ ტექნიკურ სამუშაოებთან დაკავშირებით 12.02.2019", route: "/main-menu" },
  { id: 19, title: "დაბა კაზრეთში დაგეგმილ ტექნიკურ სამუშაოებთან დაკავშირებით 12.02.2019", route: "/main-menu" },
  { id: 20, title: "ჭიათურაში კლიმატური პირობების გამო, სატუმბ სადგურზე წყლის ამღვრევასთან დაკავშირებით 18/02/2019", route: "/main-menu" },
  { id: 21, title: "წალკაში დაგეგმილ ტექნიკურ სამუშაოებთან დაკავშირებით 04.03.2019", route: "/main-menu" },
  { id: 22, title: "ოზურგეთში მცხოვრები 100-მდე ოჯახის წყალმომარაგების გაუმჯობესების მიზნით სამუშაოები დაიწყო", route: "/main-menu" },
  { id: 23, title: "ხობის მუნიციპალიტეტში გეგმიურ სამუშაოებთან დაკავშირებით", route: "/main-menu" },
  { id: 24, title: "გეგმიური და არაგეგმიური სამუშაოები", route: "/main-menu" },
  { id: 25, title: "	კომპანია", route: "/main-menu" },
  { id: 26, title: "დირექტორი", route: "/main-menu" },
  { id: 27, title: "მოადგილეები", route: "/main-menu" },
  { id: 28, title: "სტრუქტურა", route: "/main-menu" },
  { id: 29, title: "ვაკანსია", route: "/main-menu" },
  { id: 30, title: "აუდირებული ფინანსური ანგარიშგება", route: "/main-menu" },
  { id: 31, title: "წყალმომარაგების კომპანიის ბიზნეს-გეგმა", route: "/main-menu" },
  { id: 32, title: "პერსონალური მონაცემების დაცვის ოფიცერი", route: "/main-menu" },
  { id: 33, title: "ხარისხის მართვის პოლიტიკა", route: "/main-menu" },
  { id: 34, title: "ფოტო გალერია", route: "/main-menu" },
  { id: 35, title: "ვიდეო გალერია", route: "/main-menu" },
  { id: 36, title: "პუბლიკაციები", route: "/main-menu" },
  { id: 37, title: "მიმდინარე სამშენებლო სამუშაოები", route: "/main-menu" },
  { id: 38, title: "დაგეგმილი სამშენებლო სამუშაოები", route: "/main-menu" },
  { id: 39, title: "დასრულებული სამშენებლო სამუშაოები", route: "/main-menu" },
  { id: 40, title: "მიმდინარე საპროექტო სამუშაოები", route: "/main-menu" },
  { id: 41, title: "დაგეგმილი საპროექტო სამუშაოები", route: "/main-menu" },
  { id: 42, title: "ადგილობრივი პროექტები", route: "/main-menu" },
  { id: 43, title: "საერთაშორისო პროექტები", route: "/main-menu" },
  { id: 44, title: "ადგილობრივი პროექტები", route: "/main-menu" },
  { id: 45, title: "საერთაშორისო პროექტები", route: "/main-menu" },
  { id: 46, title: "ადგილობრივი პროექტები", route: "/main-menu" },
  { id: 47, title: "მიმდინარე ტენდერები", route: "/main-menu" },
  { id: 48, title: "დაგეგმილი ტენდერები", route: "/main-menu" },
  { id: 49, title: "დასრულებული ტენდერები", route: "/main-menu" },
  { id: 50, title: "საერთაშორისო ტენდერები", route: "/main-menu" },
  { id: 51, title: "ადგილობრივი ტენდერები", route: "/main-menu" },
  { id: 52, title: "საერთაშორისო ტენდერები", route: "/main-menu" },
  { id: 53, title: "ადგილობრივი ტენდერები", route: "/main-menu" },
  { id: 54, title: "წყლის სტანდარტი", route: "/main-menu" },
  { id: 55, title: "უსაფრთხოების პროცედურები, ჩარჩო დოკუმენტები და ანგარიშები", route: "/main-menu" },
  { id: 56, title: "კომპანიის წესდება", route: "/main-menu" },
  { id: 57, title: "კომპანიის დებულება", route: "/main-menu" },
  { id: 58, title: "„მომსახურების ხარისხის წესების“ დამტკიცების შესახებ - საქართველოს ენერგეტიკისა და წყალმომარაგების მარეგულირებელი ეროვნული კომისიის 2021 წლის 28 ივნისის №20 დადგენილება", route: "/main-menu" },
  { id: 59, title: "„სასმელი წყლის მიწოდებისა და მოხმარების წესების“ დამტკიცების შესახებ“ საქართველოს ენერგეტიკისა და წყალმომარაგების მარეგულირებელი ეროვნული კომისიის 2008 წლის 26 ნოემბრის №32 დადგენილება", route: "/main-menu" },
  { id: 60, title: "გარემოს დაცვის საკითხები", route: "/main-menu" },
  { id: 61, title: "სოციალური საკითხები", route: "/main-menu" },
  { id: 62, title: "საერთაშორისო ტენდერები", route: "/main-menu" },
  { id: 63, title: "ადგილობრივი ტენდერები", route: "/main-menu" },
  { id: 64, title: "საერთაშორისო პროექტები", route: "/main-menu" },
  { id: 65, title: "ადგილობრივი პროექტები", route: "/main-menu" },
  { id: 66, title: "საერთაშორისო პროექტები", route: "/main-menu" },
  { id: 67, title: "ადგილობრივი პროექტები", route: "/main-menu" },
  { id: 68, title: "გეგმიური და არაგეგმიური სამუშაოები - არქივი", route: "/main-menu" },
  
]);

const pageLink = (page) =>
  page.title === "სიახლეები" ? "/news" : `/pages/edit/${page.id}`;






const filteredPages = computed(() =>
  pages.value.filter((p) =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
);

const start = computed(() => (currentPage.value - 1) * perPage);
const end = computed(() =>
  Math.min(start.value + perPage, filteredPages.value.length)
);
const paginatedPages = computed(() =>
  filteredPages.value.slice(start.value, end.value)
);

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredPages.value.length / perPage))
);

const pageButtons = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  if (total <= 6) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const buttons = [];

  if (current <= 4) {
    buttons.push(1, 2, 3, 4, 5, "...", total);
  } else if (current >= total - 3) {
    buttons.push(1, "...", total - 4, total - 3, total - 2, total - 1, total);
  } else {
    buttons.push(1, "...", current - 1, current, current + 1, "...", total);
  }

  return buttons;
});

const nextPage = () => {
  if (end.value < filteredPages.value.length) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const deletePage = (id) => alert(`Delete page #${id}`);
</script>
  
