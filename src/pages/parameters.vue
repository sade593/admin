<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 class="text-2xl font-bold text-gray-800">პარამეტრები</h1>

        <button
          class="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
          @click="addParameter"
        >
          + დამატება
        </button>
      </div>

      <div class="overflow-x-auto rounded-xl border border-gray-100">
        <table class="min-w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-100 text-gray-600 text-xs font-semibold">
            <tr>
              <th class="px-4 py-3 w-1/3">პარამეტრი</th>
              <th class="px-4 py-3 w-1/3">მნიშვნელობა</th>
              <th class="px-4 py-3 w-1/3 text-center">ინსტრუქციები</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-if="parameters.length === 0"
              class="border-t"
            >
              <td colspan="3" class="px-4 py-6 text-center text-gray-500">
                No data available in table
              </td>
            </tr>

            <tr
              v-for="row in parameters"
              :key="row.id"
              class="border-t hover:bg-gray-50 transition"
            >
              <td class="px-4 py-3 font-medium text-gray-800">
                {{ row.key }}
              </td>
              <td class="px-4 py-3">
                {{ row.value }}
              </td>
              <td class="px-4 py-3 text-center">
                <button
                  class="text-blue-600 hover:text-blue-800"
                  @click="editParameter(row.id)"
                  title="რედაქტირება"
                >
                  <i class="fas fa-pen"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const parameters = ref([
  {
    id: 1,
    key: "ABONENT_COUNT",
    value: "416 373",
  },
]);

const addParameter = () => {
  alert("პარამეტრის დამატების ფორმა ");
};

const editParameter = (id) => {
  const row = parameters.value.find((p) => p.id === id);
  alert(`პარამეტრი "${row?.key}" რედაქტირება`);
};
</script>
