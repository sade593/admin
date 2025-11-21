<template>
  <div>
    <main class="py-10">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">განყოფილების შიგნით გვერდები</h1>

      <div class="bg-white rounded-2xl shadow-sm border p-6">
        <table class="min-w-full text-sm text-gray-700">
          <thead class="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
            <tr>
              <th class="px-6 py-3">ID</th>
              <th class="px-6 py-3">დასახელება</th>
              <th class="px-6 py-3 text-center">რედაქტირება</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.id" class="border-b hover:bg-gray-50">
              <td class="px-6 py-3">{{ item.id }}</td>
              <td class="px-6 py-3">{{ item.title }}</td>

              <td class="px-6 py-3 text-center">
                <RouterLink :to="`/pages/edit/${item.id}`" class="text-blue-600 hover:text-blue-800">
                  <i class="fas fa-pen"></i>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const categoryId = route.params.id;

// For testing - replace later with real data
const items = ref([
  { id: 101, title: "sub page 1" },
  { id: 102, title: "sub page 2" },
  { id: 103, title: "sub page 3" },
]);
</script>
