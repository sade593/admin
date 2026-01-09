<template>
  <div class="min-h-screen bg-white text-black">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl"></div>
    </div>

    <AdminHeader />

    <main class="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AdminHeader from "./components/AdminHeader.vue";
</script>
