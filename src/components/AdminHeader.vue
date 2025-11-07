<template>
  <header class="bg-white shadow-md border-b border-gray-100 py-10 px-8 flex items-center justify-between">
    <!-- Left side: Logo + Name -->
    <div class="flex items-center space-x-4">
      <img src="/vite.svg" alt="Logo" class="w-10 h-10" />
      <h1 class="text-lg font-bold text-gray-800">
        საქართველოს გაერთიანებული წყალმომარაგების კომპანია
      </h1>
    </div>

    <!-- Center: Navigation Links -->
    <nav class="flex items-center space-x-8">
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-home text-blue-600"></i>
        <span>მთავარი</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-globe text-blue-600"></i>
        <span>საიტები</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-clipboard-list text-blue-600"></i>
        <span>სერვისის ცენტრები</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-handshake text-blue-600"></i>
        <span>ტენდერები</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-gavel text-blue-600"></i>
        <span>კანონმდებლობა</span>
      </a>
      <a href="#" class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition">
        <i class="fas fa-users text-blue-600"></i>
        <span>პარტნიორები</span>
      </a>
    </nav>

    <!-- Right side: Profile Button -->
    <button class="bg-blue-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition">
      <i class="fas fa-user text-white"></i>
      <span>სანდრო ადეიშვილი</span>
      <i class="fas fa-chevron-down text-white text-sm"></i>
    </button>
  </header>
</template>

<script setup>
// No script needed for now
</script>
