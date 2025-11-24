<template>
  <div class="min-h-screen  bg-gray-50">
    

    <main class="w-full  px-6 py-10">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-gray-800">გვერდების მართვის სისტემა</h1>
        <button
          class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          + ახალი გვერდი
        </button>
      </div>

      
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
        <RouterLink
          v-for="page in pages"
          :key="page.id"
          :to="page.route"
          class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition block"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="bg-blue-50 p-3 rounded-lg">
              <i :class="page.icon" class="text-blue-600 text-xl"></i>
            </div>
            <div class="flex items-center space-x-3">
              <i class="fas fa-angle-right text-gray-400 text-lg"></i>
            </div>
          </div>
          <h2 class="text-lg font-semibold text-gray-800">{{ page.title }}</h2>
          <p class="text-gray-500 text-sm mt-1">დაწკაპეთ დეტალების სანახავად</p>
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup>
import AdminHeader from "../components/AdminHeader.vue";


const pages = [
  { id: 1, title: "მთავარი მენიუ", icon: "fas fa-bars", route: "/main-menu" },
  { id: 2, title: "სიახლეები", icon: "fas fa-newspaper", route: "/news" },
  { id: 3, title: "სერვის ცენტრები", icon: "fas fa-building", route: "/centers" },
  { id: 5, title: "შეჯამება", icon: "fas fa-chart-pie", route: "/interruptions" },
  { id: 6, title: "განაცხადები", icon: "fas fa-file-alt", route: "/announcements" }, 
  { id: 7, title: "პარამეტრები", icon: "fas fa-cog", route: "/parameters" },
];

</script>
