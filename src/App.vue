<template>
  <div class="min-h-screen bg-gray-50">
    <AdminNavbar />
    <main class="p-8">
      <DataTable />
    </main>
  </div>
</template>

<script setup>
import AdminNavbar from './components/AdminNavbar.vue'
import DataTable from './components/DataTable.vue'
</script>
