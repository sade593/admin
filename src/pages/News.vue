<template>
  <div class="w-full px-6 py-10">
    

    <!-- Content -->
    <main class="w-full px-6 py-10">
      <!-- Title + Actions -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">სიახლეები</h1>
        <div class="flex space-x-3">
          <!-- ✅ დამატება -->
          <button
            @click="goToAddNews"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            + დამატება
          </button>

          <button
            class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            რეგისტრაცია
          </button>
        </div>
      </div>

      <!-- Table -->
      <div
        class="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
      >
        <!-- Header with filters -->
        <div
          class="flex justify-between items-center px-6 py-4 border-b text-sm text-gray-700"
        >
          <div class="flex items-center space-x-2">
            <label for="rows" class="text-gray-600">ჩვენება</label>
            <select
              id="rows"
              v-model="perPage"
              class="border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option v-for="num in [5, 10, 20]" :key="num" :value="num">
                {{ num }}
              </option>
            </select>
            <span class="text-gray-600">ჩანაწერი თითო გვერდზე</span>
          </div>

          <div>
            <input
              v-model="search"
              type="text"
              placeholder="ძიება..."
              class="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Table Content -->
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th class="px-6 py-3 w-16">№</th>
              <th class="px-6 py-3">სათაური</th>
              <th class="px-6 py-3">მოკლე აღწერა</th>
              <th class="px-6 py-3 w-24">თარიღი</th>
              <th class="px-6 py-3 w-24 text-center">პარამეტრი</th>
              <th class="px-6 py-3 w-24 text-center">ინსტრუმენტები</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(item, index) in paginatedNews"
              :key="item.id"
              class="border-b hover:bg-gray-50 transition"
            >
              <td class="px-6 py-3 text-gray-600">
                {{ item.id }}
              </td>
              <td class="px-6 py-3 font-medium text-gray-900">{{ item.title }}</td>
              <td class="px-6 py-3 text-gray-700 truncate max-w-xs">
                {{ item.description }}
              </td>
              <td class="px-6 py-3 text-gray-600 whitespace-nowrap">
                {{ item.date }}
              </td>
              <td class="px-6 py-3 text-center text-gray-600">
                {{ item.status }}
              </td>
              <td class="px-6 py-3 text-center">
                <button
                  class="text-blue-600 hover:text-blue-800 mx-1"
                  @click="editItem(item.id)"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <button
                  class="text-red-500 hover:text-red-700 mx-1"
                  @click="deleteItem(item.id)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <div
          class="flex justify-between items-center px-6 py-4 border-t text-sm text-gray-600"
        >
          <span
            >Showing {{ start + 1 }} to {{ end }} of
            {{ filteredNews.length }} entries</span
          >

          <div class="flex space-x-2">
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              @click="nextPage"
              :disabled="end >= filteredNews.length"
              class="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
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
import { useRouter } from "vue-router";
import AdminHeader from "../components/AdminHeader.vue";


const router = useRouter();

const search = ref("");
const currentPage = ref(1);
const perPage = ref(10);

const news = ref([
  {
    id: 9836,
    title: "ქალაქში წყალმომარაგების ინჟინერული სისტემის მოდერნიზაცია",
    description:
      "პროექტი მიზნად ისახავს წყალმომარაგების ინფრასტრუქტურის სისტემის მოდერნიზებას...",
    date: "2025-11-06",
    status: "პროექტი",
  },
  {
    id: 9835,
    title: "ახალი პროექტის დაწყება",
    description:
      "ახალი პროექტი უზრუნველყოფს წყალმომარაგების სისტემების განახლებას და გაუმჯობესებას...",
    date: "2025-11-04",
    status: "აქტიური",
  },
  {
    id: 9831,
    title: "გიორგი შონია ზუგდიდში წყალარინების გამწმენდი ნაგებობის ფუნქციონირებას გაეცნო",
    description:
      "გიორგი შონიამ განახორციელა ვიზიტი წყალმომარაგების სისტემების შემოწმების მიზნით...",
    date: "2025-11-03",
    status: "დასრულებული",
  },
  {
    id: 9820,
    title: "ახალი სერვის ცენტრის გახსნა",
    description:
      "გაიხსნა ახალი სერვის ცენტრი დასავლეთ საქართველოში, რომელიც მოემსახურება 100000 მოსახლეს...",
    date: "2025-10-28",
    status: "აქტიური",
  },
]);

const filteredNews = computed(() =>
  news.value.filter(
    (n) =>
      n.title.toLowerCase().includes(search.value.toLowerCase()) ||
      n.description.toLowerCase().includes(search.value.toLowerCase())
  )
);


const start = computed(() => (currentPage.value - 1) * perPage.value);
const end = computed(() =>
  Math.min(start.value + perPage.value, filteredNews.value.length)
);
const paginatedNews = computed(() =>
  filteredNews.value.slice(start.value, end.value)
);

const nextPage = () => {
  if (end.value < filteredNews.value.length) currentPage.value++;
};
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};


const goToAddNews = () => {
  router.push("/news/add"); 
};

const editItem = (id) => {
  router.push(`/news/edit/${id}`);
};

const deleteItem = (id) => {
  if (confirm(`ნამდვილად გსურთ სიახლის წაშლა? (ID: ${id})`)) {
    news.value = news.value.filter((n) => n.id !== id);
  }
};
</script>
