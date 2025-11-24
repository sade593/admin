<template>
  <div class="min-h-screen bg-gray-50 py-10 px-8">

    <div class="max-w-[1600px] mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-10 space-y-10">
      <h1 class="text-3xl font-bold text-gray-800">გვერდის რედაქტირება</h1>

      <div class="grid grid-cols-2 gap-8">

        <!-- GEORGIAN CARD -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
          <h2 class="text-2xl font-semibold text-gray-800">ქართული</h2>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">დასახელება (GE)</label>
            <input v-model="form.title_ge" type="text"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">ტექსტი (GE)</label>
            <textarea v-model="form.body_ge" rows="12"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </div>

        <!-- ENGLISH CARD -->
        <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-6">
          <h2 class="text-2xl font-semibold text-gray-800">English</h2>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">Title (EN)</label>
            <input v-model="form.title_en" type="text"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label class="block mb-1 text-gray-700 font-medium">Content (EN)</label>
            <textarea v-model="form.body_en" rows="12"
              class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
        </div>

      </div>

      <div class="flex justify-end space-x-4">
        <button @click="cancel"
          class="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200">გაუქმება</button>

        <button @click="save"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">შენახვა</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const form = ref({
  title_ge: "",
  body_ge: "",
  title_en: "",
  body_en: "",
});

const save = () => {
  alert("წარმატებით შეინახა");
  router.push("/main-menu");
};

const cancel = () => router.push("/main-menu");
</script>
