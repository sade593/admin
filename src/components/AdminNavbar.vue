<template>
  <header class="bg-white shadow-sm border-b border-gray-100">
    <div
      class="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-gray-800"
    >
      <!-- Left: Logo and Title -->
      <div class="flex items-center space-x-3">
        <img
          src="/water-logo.jpg"
          alt="logo"
          class="w-8 h-8 object-contain"
        />
        <h1 class="text-sm font-medium">
          საქართველოს გაერთიანებული წყალმომარაგების კომპანია
        </h1>
      </div>

      <!-- Center: Navigation Links -->
      <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
        <a href="#" class="hover:text-blue-600 transition">პროექტები</a>
        <a href="#" class="hover:text-blue-600 transition">მომსახურებები</a>
        <a href="#" class="hover:text-blue-600 transition">კონტენტი</a>
        <a href="#" class="hover:text-blue-600 transition">კანონმდებლობა</a>
      </nav>

      <!-- Right: Profile Button -->
      <div class="flex items-center">
        <button
          class="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition flex items-center space-x-2 text-sm font-medium"
        >
          <i class="fas fa-user text-white"></i>
          <span>სანდრო ადეიშვილი</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
* {
  font-family: 'FiraGO', sans-serif;
}
</style>
