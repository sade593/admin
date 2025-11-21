<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-800">შეწყვეტები</h1>

        <div class="flex gap-3">
          <button
            class="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            @click="addInterruption"
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
            placeholder="სერვის ცენტრი ან მიზეზი..."
          />
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl border border-gray-100">
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 text-xs font-semibold">
            <tr>
              <th class="px-4 py-3 w-16">N</th>
              <th class="px-4 py-3">სერვის ცენტრი</th>
              <th class="px-4 py-3">შეწყვეტის თარიღი</th>
              <th class="px-4 py-3">აღდგენის თარიღი</th>
              <th class="px-4 py-3 w-24 text-center">აბონენტები</th>
              <th class="px-4 py-3">შეწყვეტის მიზეზი</th>
              <th class="px-4 py-3 w-20 text-center">სტატუსი</th>
              <th class="px-4 py-3 w-40">შეცვლის თარიღი</th>
              <th class="px-4 py-3 w-16 text-center">წაშლა</th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="paginatedInterruptions.length === 0" class="border-t">
              <td colspan="9" class="px-4 py-6 text-center text-gray-500">
                No data available in table
              </td>
            </tr>

            <tr
              v-for="row in paginatedInterruptions"
              :key="row.id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3 text-gray-600">
                {{ row.id }}
              </td>
              <td class="px-4 py-3">
                {{ row.center }}
              </td>
              <td class="px-4 py-3">
                {{ row.startDate }}
              </td>
              <td class="px-4 py-3">
                {{ row.endDate }}
              </td>
              <td class="px-4 py-3 text-center">
                {{ row.subscribers }}
              </td>
              <td class="px-4 py-3">
                {{ row.reason }}
              </td>
              <td class="px-4 py-3 text-center">
                {{ row.status }}
              </td>
              <td class="px-4 py-3">
                {{ row.updatedAt }}
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  class="text-red-500 hover:text-red-700"
                  @click="deleteInterruption(row.id)"
                >
                  <i class="fas fa-times"></i>
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
          Showing {{ start + 1 }} to {{ end }} of {{ filteredInterruptions.length }} entries
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
            :disabled="end >= filteredInterruptions.length"
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

const interruptions = ref([
  {
    id: 4608,
    center: "ბორჯომი დ. ბაქურიანი",
    startDate: "2025-11-21 17:30:00",
    endDate: "2025-11-21 23:30:00",
    subscribers: 2735,
    reason: "წყალმომარაგების სისტემის სარემონტო სამუშაოები",
    status: 1,
    updatedAt: "2025-11-21 17:30:30",
  },
  {
    id: 179,
    center: "გურჯაანი",
    startDate: "2025-11-21 15:00:00",
    endDate: "2025-11-21 18:00:00",
    subscribers: 249,
    reason: "წყალგაყვანილობის სისტემის გეგმიური სარემონტო სამუშაოები",
    status: 1,
    updatedAt: "2025-11-21 14:51:03",
  },
  {
    id: 6,
    center: "ქუთაისი",
    startDate: "2025-11-21 13:00:00",
    endDate: "2025-11-21 16:00:00",
    subscribers: 16,
    reason: "ავარიული სამუშაოები მაგისტრალურ ხაზზე",
    status: 1,
    updatedAt: "2025-11-21 12:59:16",
  },
  {
    id: 175,
    center: "თიანეთი",
    startDate: "2025-11-21 13:00:00",
    endDate: "2025-11-21 18:00:00",
    subscribers: 119,
    reason: "წყალმომარაგების სისტემის სარემონტო სამუშაოები",
    status: 1,
    updatedAt: "2025-11-21 12:48:27",
  },
]);

const filteredInterruptions = computed(() => {
  const term = search.value.toLowerCase().trim();
  if (!term) return interruptions.value;

  return interruptions.value.filter(
    (row) =>
      row.center.toLowerCase().includes(term) ||
      row.reason.toLowerCase().includes(term)
  );
});

const start = computed(() => (currentPage.value - 1) * perPage.value);
const end = computed(() =>
  Math.min(start.value + perPage.value, filteredInterruptions.value.length)
);
const paginatedInterruptions = computed(() =>
  filteredInterruptions.value.slice(start.value, end.value)
);

const nextPage = () => {
  if (end.value < filteredInterruptions.value.length) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const addInterruption = () => {
  alert("შეწყვეტის დამატების ფორმა (ფიქტიური მოქმედება)");
};

const deleteInterruption = (id) => {
  const ok = confirm(`წაიშალოს ჩანაწერი №${id}?`);
  if (ok) {
    interruptions.value = interruptions.value.filter((row) => row.id !== id);
  }
};
</script>
