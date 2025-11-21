<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-800">განცხადებები</h1>

        <div class="flex gap-3">
          <button
            class="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            @click="addAnnouncement"
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
            placeholder="სათაური ან ტექსტი..."
          />
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl border border-gray-100">
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 text-xs font-semibold">
            <tr>
              <th class="px-4 py-3 w-16">N</th>
              <th class="px-4 py-3">სათაური</th>
              <th class="px-4 py-3">მოკლე ტექსტი</th>
              <th class="px-4 py-3 w-40">თარიღი</th>
              <th class="px-4 py-3 w-28 text-center">რედაქტირება</th>
              <th class="px-4 py-3 w-24 text-center">წაშლა</th>
            </tr>
          </thead>

          <tbody>
            <tr v-if="paginatedAnnouncements.length === 0" class="border-t">
              <td colspan="6" class="px-4 py-6 text-center text-gray-500">
                No data available in table
              </td>
            </tr>

            <tr
              v-for="row in paginatedAnnouncements"
              :key="row.id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3 text-gray-600">
                {{ row.id }}
              </td>
              <td class="px-4 py-3 font-medium text-blue-600">
                {{ row.title }}
              </td>
              <td class="px-4 py-3">
                {{ row.summary }}
              </td>
              <td class="px-4 py-3">
                {{ row.date }}
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  class="text-blue-600 hover:text-blue-800"
                  @click="editAnnouncement(row.id)"
                >
                  <i class="fas fa-pen"></i>
                </button>
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  class="text-red-500 hover:text-red-700"
                  @click="deleteAnnouncement(row.id)"
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
          Showing {{ start + 1 }} to {{ end }} of {{ filteredAnnouncements.length }} entries
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
            :disabled="end >= filteredAnnouncements.length"
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

const announcements = ref([
  {
    id: 12,
    title: "განახლებული ინვესტიციული პროექტი",
    summary: "ინვესტორებისთვის დამატებითი ინფორმაცია პროექტის შესახებ.",
    date: "2025-11-21 10:00:00",
  },
  {
    id: 11,
    title: "მომხმარებელთა მომსახურების ახალი წესები",
    summary: "დამტკიცდა ხარისხის ახალი სტანდარტები მომსახურების პროცესში.",
    date: "2025-11-20 16:30:00",
  },
  {
    id: 10,
    title: "საგადასახადო ცვლილებების შესახებ",
    summary: "კომპანიის ტარიფებსა და გადასახადებში შეტანილი ცვლილებები.",
    date: "2025-11-19 09:15:00",
  },
]);

const filteredAnnouncements = computed(() => {
  const term = search.value.toLowerCase().trim();
  if (!term) return announcements.value;

  return announcements.value.filter(
    (row) =>
      row.title.toLowerCase().includes(term) ||
      row.summary.toLowerCase().includes(term)
  );
});

const start = computed(() => (currentPage.value - 1) * perPage.value);
const end = computed(() =>
  Math.min(start.value + perPage.value, filteredAnnouncements.value.length)
);
const paginatedAnnouncements = computed(() =>
  filteredAnnouncements.value.slice(start.value, end.value)
);

const nextPage = () => {
  if (end.value < filteredAnnouncements.value.length) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const addAnnouncement = () => {
  alert("განცხადების დამატების ფორმა (ფიქტიური მოქმედება)");
};

const editAnnouncement = (id) => {
  alert(`განცხადება №${id} რედაქტირება (ფიქტიური მოქმედება)`);
};

const deleteAnnouncement = (id) => {
  const ok = confirm(`წაიშალოს განცხადება №${id}?`);
  if (ok) {
    announcements.value = announcements.value.filter((row) => row.id !== id);
  }
};
</script>
