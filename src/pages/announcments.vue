<template>
  <main class="w-full px-6 py-10">
    <div class="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 space-y-6">

      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">განცხადებები</h1>

        <button
          class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          @click="addAnnouncement"
        >
          + დამატება
        </button>
      </div>

      <div
        v-for="item in announcements"
        :key="item.id"
        class="border border-gray-200 rounded-xl p-5 space-y-3 hover:shadow-md transition bg-white"
      >
        <div class="flex justify-between items-start gap-4">

          <!-- LEFT SIDE CONTENT -->
          <div class="flex-1 space-y-2">
            <p class="font-semibold text-gray-600 text-sm">N {{ item.id }}</p>
            <p class="font-bold text-gray-900">{{ item.title }}</p>
            <p class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- ACTIONS -->
          <div class="flex flex-col items-end gap-4">
            <RouterLink
              :to="`/announcements/edit/${item.id}`"
              class="text-blue-600 hover:text-blue-800 text-xl"
            >
              <i class="fas fa-pen"></i>
            </RouterLink>

            <button class="text-red-500 hover:text-red-700 text-xl" @click="deleteItem(item.id)">
              <i class="fas fa-trash"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const announcements = ref([
  {
    id: 12,
    title: "განცხადება ინდივიდუალური მრიცხველის მონტაჟთან დაკავშირებით",
    description:
      "მომხმარებელთა უკეთესი მომსახურების მიზნით, ... \nშენიშვნა: ჩარიცხვები სურვილისამებრ ...",
  },
  {
    id: 11,
    title: "განცხადება სამუშაოებთან დაკავშირებული გადაკეტვის შესახებ",
    description: "მომხმარებელთა მომსახურების გაუმჯობესების მიზნით ...",
  },
]);

const deleteItem = (id) => {
  if (confirm("ნამდვილად გსურთ წაშლა?")) {
    alert(`წაიშალა #${id}`);
  }
};

const addAnnouncement = () => alert("დამატება )");
</script>
