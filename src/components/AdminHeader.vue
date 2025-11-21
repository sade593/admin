<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
      <!-- 🔹 Left: Logo + Company Title (clickable) -->
      <RouterLink
        to="/"
        class="flex items-center space-x-3 hover:opacity-80 transition"
      >
        <img src="/water-logo.jpg" alt="Logo" class="h-10" />
        <div class="flex flex-col leading-tight">
          <h1 class="text-sm font-semibold text-[#0d47a1]">
            საქართველოს გაერთიანებული წყალმომარაგების კომპანია
          </h1>
          <span class="text-xs text-gray-500">
            United Water Supply Company of Georgia
          </span>
        </div>
      </RouterLink>

      <!-- 🔹 Right: User Info -->
      <div class="relative" @click="toggleDropdown">
        <div class="flex items-center space-x-3 cursor-pointer select-none">
          <div
            class="bg-blue-100 text-blue-700 font-bold rounded-full w-9 h-9 flex items-center justify-center text-sm"
          >
            ს
          </div>
          <span class="text-gray-700 font-medium text-sm">
            სანდრო ადეიშვილი
          </span>
          <i
            :class="[
              'fas text-gray-500 text-xs transition-transform duration-200',
              dropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
            ]"
          ></i>
        </div>

        <!-- 🔽 Dropdown Menu -->
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50"
        >
          <RouterLink
            to="/settings"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
          >
            <i class="fas fa-user-cog mr-2 text-gray-500"></i> პროფილი / პარამეტრები
          </RouterLink>
          <RouterLink
            to="/applications"
            class="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
          >
            <i class="fas fa-file-alt mr-2 text-gray-500"></i> ჩემი განაცხადები
          </RouterLink>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50 transition"
          >
            <i class="fas fa-sign-out-alt mr-2"></i> გამოსვლა
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

// Placeholder logout function
const logout = () => {
  alert("გამოსვლა წარმატებით შესრულდა");
  dropdownOpen.value = false;
};
</script>
