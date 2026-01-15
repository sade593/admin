<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
    <div class="w-full px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
          water.gov.ge
        </h1>
        <p class="text-slate-600">
          აირჩიეთ განყოფილება ინფორმაციის განსახლებლად
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <router-link
          to="/main-menu"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-bars text-blue-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              ნავიგაცია
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            მთავარი მენიუ
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            გამართეთ ნავიგაცია და ძირითადი სტრუქტურა.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>

        <!-- Card 2 -->
        <router-link
          to="/news"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-green-300"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-newspaper text-green-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              კონტენტი
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            სიახლეები
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            მართეთ პრესრელიზები და მედიაკონტენტი.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>

        <!-- Card 3 -->
        <router-link
          to="/centers"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-purple-300"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-building text-purple-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
              ლოკაციები
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            სერვის ცენტრები
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            განაახლეთ ოფისების მისამართები და სამუშაო საათები.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>

        <!-- Card 4 -->
        <router-link
          to="/interruptions"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-orange-300"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-chart-pie text-orange-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              ანალიტიკა
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            შეჯამება
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            იხილეთ მოხმარების სტატისტიკა და ანალიზი.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>

        <!-- Card 5 -->
        <router-link
          to="/announcements"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-pink-300"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-file-alt text-pink-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
              კომუნიკაცია
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            განაცხადები
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            გამოაქვეყნეთ განცხადებები და შეტყობინებები.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>

        <!-- Card 6 -->
        <router-link
          to="/parameters"
          class="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-slate-400"
        >
          <div class="flex items-start justify-between mb-6">
            <div class="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center">
              <i class="fas fa-cog text-slate-600 text-xl"></i>
            </div>
            <span class="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
              სისტემა
            </span>
          </div>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">
            პარამეტრები
          </h3>
          
          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            აკონტროლეთ სისტემის ძირითადი პარამეტრები.
          </p>
          
          <div class="flex items-center text-blue-600 font-medium">
            <span>მართვა</span>
            <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform duration-300"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  {
    label: "სულ მომხმარებელი",
    value: "12,458",
    change: "+12.5%",
    trending: "up",
    icon: "fas fa-users",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    label: "აქტიური განცხადებები",
    value: "248",
    change: "+8.2%",
    trending: "up",
    icon: "fas fa-file-alt",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    label: "სერვის ცენტრები",
    value: "34",
    change: "+2",
    trending: "up",
    icon: "fas fa-building",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    label: "ბოლო განახლება",
    value: "2 სთ",
    change: "რეალურ დროში",
    trending: "up",
    icon: "fas fa-clock",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

const pages = [
  {
    id: 1,
    title: "მთავარი მენიუ",
    icon: "fas fa-bars",
    route: "/main-menu",
    description: "გამართეთ ნავიგაცია და ძირითადი სტრუქტურა.",
    tag: "ნავიგაცია",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    tagColor: "bg-blue-50 text-blue-700 group-hover:bg-blue-100"
  },
  {
    id: 2,
    title: "სიახლეები",
    icon: "fas fa-newspaper",
    route: "/news",
    description: "მართეთ პრესრელიზები და მედიაკონტენტი.",
    tag: "კონტენტი",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    tagColor: "bg-green-50 text-green-700 group-hover:bg-green-100"
  },
  {
    id: 3,
    title: "სერვის ცენტრები",
    icon: "fas fa-building",
    route: "/centers",
    description: "განაახლეთ ოფისების მისამართები და სამუშაო საათები.",
    tag: "ლოკაციები",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    tagColor: "bg-purple-50 text-purple-700 group-hover:bg-purple-100"
  },
  {
    id: 5,
    title: "შეჯამება",
    icon: "fas fa-chart-pie",
    route: "/interruptions",
    description: "იხილეთ მოხმარების სტატისტიკა და ანალიზი.",
    tag: "ანალიტიკა",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    tagColor: "bg-orange-50 text-orange-700 group-hover:bg-orange-100"
  },
  {
    id: 6,
    title: "განაცხადები",
    icon: "fas fa-file-alt",
    route: "/announcements",
    description: "გამოაქვეყნეთ განცხადებები და შეტყობინებები.",
    tag: "კომუნიკაცია",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    tagColor: "bg-pink-50 text-pink-700 group-hover:bg-pink-100"
  },
  {
    id: 7,
    title: "პარამეტრები",
    icon: "fas fa-cog",
    route: "/parameters",
    description: "აკონტროლეთ სისტემის ძირითადი პარამეტრები.",
    tag: "სისტემა",
    bgColor: "bg-gray-100",
    iconColor: "text-gray-600",
    tagColor: "bg-gray-50 text-gray-700 group-hover:bg-gray-100"
  },
];
</script>
