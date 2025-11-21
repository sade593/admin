<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8 space-y-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 class="text-2xl font-bold text-gray-800">თარგმნა</h1>

        <div class="flex gap-3">
          <button
            class="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
            @click="addKey"
          >
            + დამატება
          </button>
        </div>
      </div>

      <div
        v-for="item in translations"
        :key="item.id"
        class="border border-gray-100 rounded-xl overflow-hidden"
      >
        <div class="bg-gray-50 px-4 py-3 border-b border-gray-100">
          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {{ item.key }}
          </p>
        </div>

        <div class="p-4 space-y-4">
          <div class="grid md:grid-cols-[80px_minmax(0,1fr)] gap-3 md:items-center">
            <span class="text-xs font-semibold text-gray-500">EN</span>
            <input
              v-model="item.en"
              type="text"
              class="border rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="English text"
            />
          </div>

          <div class="grid md:grid-cols-[80px_minmax(0,1fr)] gap-3 md:items-center">
            <span class="text-xs font-semibold text-gray-500">GE</span>
            <input
              v-model="item.ge"
              type="text"
              class="border rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ქართული ტექსტი"
            />
          </div>

          <div class="flex justify-end mt-2">
            <button
              class="px-4 py-1.5 rounded-lg bg-green-600 text-white text-sm hover:bg-green-700 transition"
              @click="saveItem(item)"
            >
              შენახვა
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-end pt-2">
        <button
          class="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition"
          @click="saveAll"
        >
          ყველა ცვლილების შენახვა
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const translations = ref([
  {
    id: 1,
    key: "homeRemoteText",
    en: "Home remote text",
    ge: "მთავარი გვერდის ტექსტი",
  },
  {
    id: 2,
    key: "note",
    en: "Note",
    ge: "შენიშვნა",
  },
  {
    id: 3,
    key: "tenders_completion_date",
    en: "Completion date",
    ge: "დასრულების თარიღი",
  },
]);

const addKey = () => {
  const newId = translations.value.length
    ? translations.value[translations.value.length - 1].id + 1
    : 1;

  translations.value.push({
    id: newId,
    key: `new_key_${newId}`,
    en: "",
    ge: "",
  });
};

const saveItem = (item) => {
  alert(`"${item.key}" თარგმანი შენახულია ✅`);
};

const saveAll = () => {
  alert("ყველა ცვლილება შენახულია ✅ (ფრონტ-ენდის ვიზუალიზაციაა მხოლოდ)");
};
</script>
