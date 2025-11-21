<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-800">სერვის ცენტრები</h1>

        <div class="flex gap-3">
          <button
            class="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            @click="addCenter"
          >
            + დამატება
          </button>
        </div>
      </div>

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div class="flex items-center gap-2 text-sm text-gray-700">
          <span>ჩანაწერი</span>
          <select
            v-model.number="perPage"
            class="border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
          </select>
          <span>ჩანაწერი თითო გვერდზე</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-sm text-gray-600">ძიება:</span>
          <input
            v-model="search"
            type="text"
            class="border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl border border-gray-100">
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 text-xs font-semibold">
            <tr>
              <th class="px-4 py-3 w-16">N</th>
              <th class="px-4 py-3">სათაური</th>
              <th class="px-4 py-3">მოკლე აღწერა</th>
              <th class="px-4 py-3 w-32">თარიღი</th>
              <th class="px-4 py-3 w-24 text-center">ჰიტები</th>
              <th class="px-4 py-3 w-28 text-center">ინსტრუმენტები</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-if="paginatedCenters.length === 0"
              class="border-t"
            >
              <td colspan="6" class="px-4 py-6 text-center text-gray-500">
                No data available in table
              </td>
            </tr>

            <tr
              v-for="center in paginatedCenters"
              :key="center.id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3 text-gray-600">{{ center.id }}</td>
              <td class="px-4 py-3 font-medium text-blue-600">
                {{ center.title }}
              </td>
              <td class="px-4 py-3 text-gray-700 truncate max-w-xl">
                {{ center.description }}
              </td>
              <td class="px-4 py-3 text-gray-700">
                {{ center.date }}
              </td>
              <td class="px-4 py-3 text-center text-gray-700">
                {{ center.hits }}
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  class="text-blue-600 hover:text-blue-800 mr-3"
                  @click="editCenter(center.id)"
                >
                  <i class="fas fa-pen"></i>
                </button>
                <button
                  class="text-red-500 hover:text-red-700"
                  @click="deleteCenter(center.id)"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-4 text-sm text-gray-600"
      >
        <span>
          Showing {{ start + 1 }} to {{ end }} of {{ filteredCenters.length }} entries
        </span>

        <div class="flex justify-end gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            @click="nextPage"
            :disabled="end >= filteredCenters.length"
            class="px-3 py-1 border rounded text-sm hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

const search = ref("");
const currentPage = ref(1);
const perPage = ref(10);

const centers = ref([
  {
    id: 9836,
    title: "ქალაქში წყალმომარაგების სისტემის გაუმჯობესება",
    description: "პროექტის მიზანია წყალმომარაგების სერვისის ხარისხის გაუმჯობესება მომხმარებლებისთვის.",
    date: "2025-11-06",
    hits: 12,
  },
  {
    id: 9835,
    title: "ახალი სერვის ცენტრის გახსნა",
    description: "ახალი სერვის ცენტრი რეგიონულ ოფისში მომხმარებელთა უკეთესი მომსახურებისთვის.",
    date: "2025-11-04",
    hits: 7,
  },
  {
    id: 9831,
    title: "გიორგი შარტავას ქუჩის სარეაბილიტაციო სამუშაოები",
    description: "ქუჩის სარეაბილიტაციო სამუშაოები და წყალმომარაგების ქსელის განახლება.",
    date: "2025-11-03",
    hits: 4,
  },
  {
    id: 9820,
    title: "ახალი სერვისის დეპარტამენტის გაშვება",
    description: "კომპანია იწყებს ახალი სერვისის депარტამენტის ფუნქციონირებას.",
    date: "2025-10-28",
    hits: 3,
  },
]);

const filteredCenters = computed(() => {
  const term = search.value.toLowerCase();
  if (!term) return centers.value;
  return centers.value.filter(
    (c) =>
      c.title.toLowerCase().includes(term) ||
      c.description.toLowerCase().includes(term)
  );
});

const start = computed(() => (currentPage.value - 1) * perPage.value);
const end = computed(() =>
  Math.min(start.value + perPage.value, filteredCenters.value.length)
);
const paginatedCenters = computed(() =>
  filteredCenters.value.slice(start.value, end.value)
);

const nextPage = () => {
  if (end.value < filteredCenters.value.length) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const addCenter = () => {
  alert("სერვის ცენტრის დამატების ფორმა (ფიქტიური მოქმედება)");
};

const editCenter = (id) => {
  alert(`რედაქტირება №${id} (ფიქტიური მოქმედება)`);
};

const deleteCenter = (id) => {
  const ok = confirm(`წაიშალოს ჩანაწერი №${id}?`);
  if (ok) {
    centers.value = centers.value.filter((c) => c.id !== id);
  }
};
</script>
