<template>
  <div class="p-8 bg-gray-50 min-h-screen">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900">პროექტების მართვის სისტემა</h1>
        <p class="text-gray-500">სისტემაში არსებული პროექტების ზოგადი მიმოხილვა</p>
      </div>
      <button
        class="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
      >
        + ახალი პროექტი
      </button>
    </div>

    <!-- Statistic cards -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
      <div
        v-for="stat in stats"
        :key="stat.title"
        class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition"
      >
        <div class="flex items-center justify-between mb-2">
          <div
            class="w-10 h-10 flex items-center justify-center rounded-xl"
            :class="stat.bg"
          >
            <i :class="stat.icon" class="text-lg"></i>
          </div>
          <span class="text-sm text-gray-400">{{ stat.label }}</span>
        </div>
        <h2 class="text-xl font-bold text-gray-900">{{ stat.count }}</h2>
        <p class="text-gray-600 text-sm">{{ stat.title }}</p>
      </div>
    </div>

    <!-- Project lists -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div
        v-for="section in sections"
        :key="section.title"
        class="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
      >
        <h3 class="text-lg font-bold mb-4">{{ section.title }}</h3>
        <div
          v-for="(proj, i) in section.projects"
          :key="i"
          class="border border-gray-100 rounded-xl p-4 mb-4 hover:shadow transition"
        >
          <p class="font-medium text-gray-900">{{ proj.name }}</p>
          <p class="text-sm text-gray-500 mb-2">{{ proj.location }}</p>

          <div class="w-full bg-gray-100 rounded-full h-2 mb-2">
            <div
              class="h-2 rounded-full"
              :class="section.color"
              :style="{ width: proj.progress + '%' }"
            ></div>
          </div>

          <div class="flex justify-between text-sm text-gray-600">
            <span>{{ proj.progress }}%</span>
            <span class="font-semibold text-green-600">{{ proj.budget }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { title: 'სულ პროექტები', count: 247, icon: 'fas fa-briefcase', bg: 'bg-blue-100', label: 'ყველა კატეგორია' },
  { title: 'დაგეგმილი', count: 35, icon: 'fas fa-clock', bg: 'bg-yellow-100', label: 'მიმდინარე ფაზა' },
  { title: 'მიმდინარე', count: 68, icon: 'fas fa-bolt', bg: 'bg-green-100', label: 'აქტიური პროექტები' },
  { title: 'დასრულებული', count: 144, icon: 'fas fa-check-circle', bg: 'bg-purple-100', label: 'შესრულებული პროექტები' },
  { title: 'გადადებული', count: 12, icon: 'fas fa-times-circle', bg: 'bg-red-100', label: 'შეჩერებული' },
]

const sections = [
  {
    title: 'დაგეგმილი',
    color: 'bg-yellow-400',
    projects: [
      { name: 'წყალმომარაგების რეაბილიტაცია', location: 'ქ. რუსთავი, 8-ე მიკრორაიონი', progress: 35, budget: '₾ 2.5M' },
    ],
  },
  {
    title: 'მიმდინარე',
    color: 'bg-green-500',
    projects: [
      { name: 'წყალმომარაგების მარშრუტის შევსება', location: 'დ. თელავი', progress: 65, budget: '₾ 1.8M' },
    ],
  },
  {
    title: 'დასრულებული',
    color: 'bg-purple-500',
    projects: [
      { name: 'რეზერვუარის რეაბილიტაცია', location: 'ჯ. ოზურგეთი', progress: 100, budget: '₾ 3.2M' },
    ],
  },
  {
    title: 'გადადებული',
    color: 'bg-red-500',
    projects: [
      { name: 'წყალმომარაგების პროექტი', location: 'ქ. თელავი', progress: 72, budget: '₾ 2.8M' },
    ],
  },
]
</script>

<style scoped>
h1, h2, h3, p, span, button {
  font-family: 'FiraGO', sans-serif;
}
</style>
