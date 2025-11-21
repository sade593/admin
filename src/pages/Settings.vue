<template>
  <div class="min-h-screen bg-gray-50">
    <AdminHeader />
    <AdminNavbar />
    <main class="max-w-7xl mx-auto px-6 py-10">
      <h1 class="text-2xl font-bold text-gray-800 mb-6">სიახლეები</h1>
      <p class="text-gray-600">აქ გამოჩნდება ინფორმაცია სიახლეების შესახებ...</p>
    </main>
  </div>
</template>

<script setup>
import AdminHeader from "../components/AdminHeader.vue";
import AdminNavbar from "../components/AdminNavbar.vue";
</script>
