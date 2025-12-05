<template>
  <div class="max-w-[95%] mx-auto py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-10">სიახლის რედაქტირება</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

      <!-- GEORGIAN CARD -->
      <div class="bg-white shadow-sm border rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-bold text-gray-800">ქართული</h2>

        <div>
          <label class="block text-sm font-medium text-gray-700">სათაური (GE)</label>
          <input
            v-model="form.title_ge"
            type="text"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">მოკლე აღწერა (GE)</label>
          <textarea
            v-model="form.shortDescription_ge"
            rows="4"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">სრული აღწერა (GE)</label>
          <textarea
            v-model="form.fullDescription_ge"
            rows="8"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>
      </div>

      <!-- ENGLISH CARD -->
      <div class="bg-white shadow-sm border rounded-2xl p-6 space-y-4">
        <h2 class="text-xl font-bold text-gray-800">English</h2>

        <div>
          <label class="block text-sm font-medium text-gray-700">Title (EN)</label>
<!--          <input-->
<!--            v-model="form.title_en"-->
<!--            type="text"-->
<!--            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"-->
<!--          />-->
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Short description (EN)</label>
          <textarea
            v-model="form.shortDescription_en"
            rows="4"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Full description (EN)</label>
          <textarea
            v-model="form.fullDescription_en"
            rows="8"
            class="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-600"
          ></textarea>
        </div>
      </div>
    </div>

    <!-- FILE + STATUS + DATE -->
    <div class="bg-white shadow-sm border rounded-2xl p-6 mt-10 space-y-4">
      <div>
        <label class="block text-sm font-medium mb-1">სტატუსი</label>
        <select v-model="form.status" class="border rounded-lg px-3 py-2">
          <option value="აქტიური">აქტიური</option>
          <option value="პროექტი">პროექტი</option>
          <option value="დასრულებული">დასრულებული</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">თარიღი</label>
        <input
          v-model="form.date"
          type="date"
          class="border rounded-lg px-3 py-2"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">მთავარი სურათი</label>
        <input type="file" @change="handleFileUpload" class="border rounded-lg px-3 py-2" />
        <img v-if="form.image" :src="form.image" class="w-40 rounded-lg border mt-3" />
      </div>
    </div>

    <!-- SUBMIT BUTTONS -->
    <div class="flex justify-end space-x-4 mt-8">
      <button @click="cancel" class="px-5 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
        გაუქმება
      </button>

      <button @click="saveNews" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        შენახვა
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  status: "აქტიური",
  image: "",
  date: "",
  title_ge: "",
  title_en: "",
  shortDescription_ge: "",
  shortDescription_en: "",
  fullDescription_ge: "",
  fullDescription_en: "",
});

const handleFileUpload = (e) => {
  const file = e.target.files[0];
  if (file) form.value.image = URL.createObjectURL(file);
};

const saveNews = () => {
  alert("სიახლე წარმატებით შეინახა !");
  router.push("/news");
};

const cancel = () => router.push("/news");
</script>
