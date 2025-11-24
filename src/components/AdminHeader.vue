<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 border-b">
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
      
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

      <nav class="flex space-x-6 text-gray-700 text-sm font-medium">
        <RouterLink to="/main-menu" class="nav-link">მთავარი მენიუ</RouterLink>
        <RouterLink to="/news" class="nav-link">სიახლეები</RouterLink>
        <RouterLink to="/announcements" class="nav-link">განცხადებები</RouterLink>
        <RouterLink to="/centers" class="nav-link">სერვის ცენტრები</RouterLink>
        <RouterLink to="/parameters" class="nav-link">პარამეტრები</RouterLink>
      </nav>

    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const dropdownOpen = ref(false);
const toggleDropdown = () => (dropdownOpen.value = !dropdownOpen.value);
const logout = () => {
  alert("გამოსვლა წარმატებით შესრულდა");
  dropdownOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  @apply text-sm font-medium text-gray-700 hover:text-blue-600 transition;
}
</style>
