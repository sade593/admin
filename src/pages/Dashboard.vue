<template>
  <div class="space-y-10">
    <section>
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold text-black">სექციები და შინაარსი</h2>
          <p class="text-sm text-black/60">შედით თითოეულ განყოფილებაში და განაახლეთ ინფორმაცია.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:border-blue-200">
            ფილტრები
          </button>
          <button class="rounded-full border border-secondary bg-secondary/10 px-4 py-2 text-sm font-semibold text-black shadow-sm">
            ახალი განყოფილება
          </button>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <router-link
          v-for="page in pages"
          :key="page.id"
          :to="page.route"
          class="group rounded-3xl border border-blue-100/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
        >
          <div class="flex items-start justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-blue-600">
              <i :class="page.icon" class="text-lg"></i>
            </div>
            <span class="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-black/70">
              {{ page.tag }}
            </span>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-black">{{ page.title }}</h3>
          <p class="mt-2 text-sm text-black/60">{{ page.description }}</p>
          <div class="mt-6 flex items-center justify-between text-sm font-semibold text-black">
            <span>მართვა</span>
            <i class="fa-solid fa-arrow-right transition group-hover:translate-x-1"></i>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const pages = [
  {
    id: 1,
    title: "მთავარი მენიუ",
    icon: "fas fa-bars",
    route: "/main-menu",
    description: "გამართეთ ნავიგაცია და ძირითადი სტრუქტურა.",
    tag: "ნავიგაცია",
  },
  {
    id: 2,
    title: "სიახლეები",
    icon: "fas fa-newspaper",
    route: "/news",
    description: "მართეთ პრესრელიზები და მედიაკონტენტი.",
    tag: "კონტენტი",
  },
  {
    id: 3,
    title: "სერვის ცენტრები",
    icon: "fas fa-building",
    route: "/centers",
    description: "განაახლეთ ოფისების მისამართები და სამუშაო საათები.",
    tag: "ლოკაციები",
  },
  {
    id: 5,
    title: "შეჯამება",
    icon: "fas fa-chart-pie",
    route: "/interruptions",
    description: "იხილეთ მოხმარების სტატისტიკა და ანალიზი.",
    tag: "ანალიტიკა",
  },
  {
    id: 6,
    title: "განაცხადები",
    icon: "fas fa-file-alt",
    route: "/announcements",
    description: "გამოაქვეყნეთ განცხადებები და შეტყობინებები.",
    tag: "კომუნიკაცია",
  },
  {
    id: 7,
    title: "პარამეტრები",
    icon: "fas fa-cog",
    route: "/parameters",
    description: "აკონტროლეთ სისტემის ძირითადი პარამეტრები.",
    tag: "სისტემა",
  },
];
</script>
