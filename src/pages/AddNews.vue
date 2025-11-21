<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-8">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">სიახლის დამატება</h1>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">სტატუსი</label>
          <select
            v-model="form.status"
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="აქტიური">აქტიური</option>
            <option value="პროექტი">პროექტი</option>
            <option value="დასრულებული">დასრულებული</option>
          </select>
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">მთავარი სურათი</label>
          <input
            type="file"
            class="border rounded-lg px-3 py-2 w-full text-gray-700"
            @change="handleFileUpload"
          />
          <div v-if="form.image" class="mt-3">
            <img
              :src="form.image"
              alt="Preview"
              class="w-48 h-32 object-cover rounded-lg border"
            />
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <label class="block text-gray-700 font-medium mb-1">სათაური</label>
          <input
            v-model="form.title"
            type="text"
            placeholder="შეიყვანე სათაური..."
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 font-medium mb-1">თარიღი</label>
          <input
            v-model="form.date"
            type="date"
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">მოკლე აღწერა</label>
        <textarea
          v-model="form.shortDescription"
          rows="3"
          class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-1">სრული აღწერა</label>
        <textarea
          v-model="form.fullDescription"
          rows="8"
          class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div class="flex justify-end space-x-4 mt-6">
        <button
          @click="cancelAdd"
          class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          გაუქმება
        </button>
        <button
          @click="saveNews"
          class="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
        >
          დამატება
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  title: "",
  shortDescription: "",
  fullDescription: "",
  date: "",
  status: "აქტიური",
  image: "",
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) form.value.image = URL.createObjectURL(file);
};

const saveNews = () => {
  if (!form.value.title) return alert("გთხოვ შეიყვანე სათაური!");
  alert(`სიახლე "${form.value.title}" წარმატებით დაემატა ✅`);
  router.push("/news");
};

const cancelAdd = () => {
  router.push("/news");
};
</script>
