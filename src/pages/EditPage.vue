<template>
  <div class="max-w-5xl mx-auto bg-white rounded-xl shadow border p-8">
    <h1 class="text-2xl font-bold mb-6">გვერდის რედაქტირება</h1>

    <div class="space-y-4">
      <div>
        <label class="block text-gray-700 font-medium mb-1">დასახელება</label>
        <input v-model="title" class="w-full border px-4 py-2 rounded-lg" />
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">კონტენტი</label>
        <textarea v-model="content" rows="8" class="w-full border px-4 py-2 rounded-lg"></textarea>
      </div>
    </div>

    <div class="flex justify-end space-x-4 mt-8">
      <RouterLink to="/main-menu" class="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">უკან</RouterLink>
      <button class="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">შენახვა</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const title = ref(`Page #${id}`);
const content = ref("");
</script>
