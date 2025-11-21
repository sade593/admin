<template>
  <div class="min-h-screen bg-gray-50">
   

    
    <main class="max-w-7xl mx-auto px-6 py-10">
      <div
        class="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-8"
      >
        <!-- Title -->
        <h1 class="text-2xl font-bold text-gray-800 mb-6">
          სიახლის რედაქტირება
        </h1>

        <!-- Top Controls -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Active Switch -->
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

          <!-- Main Image -->
          <div>
            <label class="block text-gray-700 font-medium mb-1"
              >მთავარი სურათი</label
            >
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

        <!-- Title / Description -->
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <label class="block text-gray-700 font-medium mb-1">სათაური</label>
            <input
              v-model="form.title"
              type="text"
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

        <!-- Short Description -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">მოკლე აღწერა</label>
          <textarea
            v-model="form.shortDescription"
            rows="3"
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Full Description -->
        <div>
          <label class="block text-gray-700 font-medium mb-1">სრული აღწერა</label>
          <textarea
            v-model="form.fullDescription"
            rows="8"
            class="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end space-x-4 mt-6">
          <button
            @click="cancelEdit"
            class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            გაუქმება
          </button>
          <button
            @click="saveChanges"
            class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            შენახვა
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import AdminHeader from "../components/AdminHeader.vue";
import AdminNavbar from "../components/AdminNavbar.vue";

const router = useRouter();
const route = useRoute();

const form = ref({
  id: "",
  title: "",
  shortDescription: "",
  fullDescription: "",
  date: "",
  status: "აქტიური",
  image: "",
});

// 📥 Simulate fetching existing data
onMounted(() => {
  const newsId = route.params.id;
  console.log("Editing news with ID:", newsId);

  // Simulated data fetching
  form.value = {
    id: newsId,
    title: "ქალაქში წყალმომარაგების ინჟინერული სისტემის მოდერნიზაცია",
    shortDescription:
      "პროექტი მიზნად ისახავს წყალმომარაგების ინფრასტრუქტურის მოდერნიზაციას...",
    fullDescription:
      "პროექტი მოიცავს თანამედროვე ინჟინერული სისტემების განახლებას, SCADA ტექნოლოგიის დანერგვას და ქსელის ოპტიმიზაციას...",
    date: "2025-11-06",
    status: "პროექტი",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Example.jpg/800px-Example.jpg",
  };
});

// 🖼 Image preview
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.value.image = URL.createObjectURL(file);
  }
};

// 💾 Save changes
const saveChanges = () => {
  alert(`სიახლე "${form.value.title}" წარმატებით განახლდა ✅`);
  router.push("/news");
};

// ❌ Cancel
const cancelEdit = () => {
  router.push("/news");
};
</script>
