<template>
  <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
  <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div class="h-16 flex items-center justify-between">

      <!-- LEFT: Logo -->
      <div class="flex items-center gap-3">
        <router-link to="/" class="flex items-center gap-2">
          <img src="/water-logo.jpg" alt="logo" class="w-20 hidden sm:block">
        </router-link>
      </div>

      <!-- RIGHT: Links + Profile in one flex box -->
      <div class="flex items-center gap-6">

         <nav class="flex space-x-6 text-gray-700 text-sm font-medium">
        <RouterLink to="/main-menu" class="nav-link">მთავარი მენიუ</RouterLink>
        <RouterLink to="/news" class="nav-link">სიახლეები</RouterLink>
        <RouterLink to="/announcements" class="nav-link">განცხადებები</RouterLink>
        <RouterLink to="/centers" class="nav-link">სერვის ცენტრები</RouterLink>
        <RouterLink to="/parameters" class="nav-link">პარამეტრები</RouterLink>
      </nav>

        <!-- PROFILE -->
        <div class="relative">
          <button @click="profileOpen = !profileOpen"
            class="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
            <span class="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold uppercase">
              {{ userInitials }}
            </span>
            <span class="text-sm font-medium hidden sm:block">{{ userName }}</span>
          </button>

          <div
            v-if="profileOpen"
            class="absolute right-0 mt-2 w-56 rounded-2xl border border-gray-200 bg-white shadow-lg z-50"
          >
            <div class="p-3 border-b border-gray-100">
              <p class="text-sm font-semibold">{{ userName }}</p>
              <p class="text-xs text-gray-500 truncate">{{ userPosition }}</p>
            </div>
            <button @click="onSignOut" class="block w-full px-3 py-2 text-sm text-left hover:bg-gray-50">
              გამოსვლა
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</nav>

</template>

<script setup>
import { ref } from "vue";

const profileOpen = ref(false);

const userName = "გიორგი კაპანაძე";
const userInitials = "GK";
const userPosition = "ადმინისტრატორი";

const isActive = (path) => window.location.pathname === path;

const onSignOut = () => {
  alert("გამოსვლა წარმატებით შესრულდა");
  profileOpen.value = false;
};
</script>
