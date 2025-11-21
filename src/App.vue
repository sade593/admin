<template>
  <div class="min-h-screen bg-gray-50">
    <AdminHeader />
    <AdminNavbar />

    <main class="content-wrapper py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AdminHeader from "./components/AdminHeader.vue";
import AdminNavbar from "./components/AdminNavbar.vue";
</script>

<style>
.content-wrapper {
  width: 95%;
  margin: 0 auto;
}
</style>
