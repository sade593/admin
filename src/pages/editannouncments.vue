<template>
  <div class="min-h-screen bg-gray-50 py-10 px-8">
    <div class="max-w-[1600px] mx-auto bg-white border rounded-2xl p-10 shadow-sm space-y-10">

      <h1 class="text-3xl font-bold text-gray-800 mb-6">განცხადების რედაქტირება</h1>

      <div class="grid grid-cols-2 gap-8">

        <!-- GEORGIAN -->
        <div class="bg-gray-50 border rounded-xl p-6 space-y-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">ქართული</h2>

          <label class="block mb-1 font-medium">სათაური (GE)</label>
          <input v-model="form.title_ge" class="w-full border rounded-lg px-3 py-2" />

          <label class="block mb-1 font-medium">ტექსტი (GE)</label>
          <textarea v-model="form.body_ge" rows="10" class="w-full border rounded-lg px-3 py-2"></textarea>
        </div>

        <!-- ENGLISH -->
        <div class="bg-gray-50 border rounded-xl p-6 space-y-4">
          <h2 class="text-xl font-semibold text-gray-800 mb-2">English</h2>

          <label class="block mb-1 font-medium">Title (EN)</label>
          <input v-model="form.title_en" class="w-full border rounded-lg px-3 py-2" />

          <label class="block mb-1 font-medium">Text (EN)</label>
          <textarea v-model="form.body_en" rows="10" class="w-full border rounded-lg px-3 py-2"></textarea>
        </div>

      </div>

      <div class="flex justify-end space-x-4">
        <button @click="cancel" class="px-6 py-2 border rounded hover:bg-gray-100">გაუქმება</button>
        <button @click="save" class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">შენახვა</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Announcments from "./announcments.vue";

const router = useRouter();
const form = ref({
  title_ge: "",
  body_ge: "",
  title_en: "",
  body_en: "",
});


const save = () => router.push("/announcements");
const cancel = () => router.push("/announcements");

</script>
