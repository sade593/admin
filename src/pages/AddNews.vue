<template>
  <div class="min-h-screen bg-gray-50">
    <main class="w-full px-6 py-10">
      <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-8">

        <h1 class="text-2xl font-bold text-gray-800 mb-6">სიახლის დამატება</h1>

        <!-- STATUS + IMAGE -->
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
            <input type="file" class="border rounded-lg px-3 py-2 w-full text-gray-700" @change="handleFileUpload" />
            <div v-if="form.image" class="mt-3">
              <img :src="form.image" alt="Preview" class="w-48 h-32 object-cover rounded-lg border" />
            </div>
          </div>
        </div>

        <!-- TITLE GE + EN -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-medium mb-1">სათაური (GE)</label>
            <input
              v-model="form.title.ge"
              type="text"
              placeholder="შეიყვანე სათაური..."
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Title (EN)</label>
            <input
              v-model="form.title.en"
              type="text"
              placeholder="Enter title..."
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- DATE -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">თარიღი</label>
          <input
            v-model="form.date"
            type="date"
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- SHORT DESCRIPTION GE + EN -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-medium mb-1">მოკლე აღწერა (GE)</label>
            <textarea
              v-model="form.shortDescription.ge"
              rows="3"
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Short description (EN)</label>
            <textarea
              v-model="form.shortDescription.en"
              rows="3"
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <!-- FULL DESCRIPTION GE + EN -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-medium mb-1">სრული აღწერა (GE)</label>
            <textarea
              v-model="form.fullDescription.ge"
              rows="8"
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-1">Full description (EN)</label>
            <textarea
              v-model="form.fullDescription.en"
              rows="8"
              class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <!-- BUTTONS -->
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = ref({
  title: { ge: "", en: "" },
  shortDescription: { ge: "", en: "" },
  fullDescription: { ge: "", en: "" },
  date: "",
  status: "აქტიური",
  image: ""
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) form.value.image = URL.createObjectURL(file);
};

const saveNews = () => {
  if (!form.value.title.ge) return alert("გთხოვ შეიყვანე სათაური ქართულად!");
  if (!form.value.title.en) return alert("Please enter an English title!");

  alert(`სიახლე "${form.value.title.ge}" დამატებულია`);
  router.push("/news");
};

const cancelAdd = () => router.push("/news");
</script>
