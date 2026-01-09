<template>
  <div class="space-y-10">
    <section class="grid gap-6 lg:grid-cols-[2fr,1fr]">
      <div class="rounded-3xl border border-blue-100/80 bg-white p-8 shadow-sm">
        <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-black">Water.gov.ge</p>
            <p class="mt-2 text-sm text-black/60">
              სწრაფად მართეთ კონტენტი, მონიტორინგი და მარკეტინგის კამპანიები ერთ სივრცეში.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <button
              class="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary/90"
            >
              <i class="fa-solid fa-plus"></i>
              ახალი გვერდი
            </button>
            <button
              class="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm transition hover:border-blue-200"
            >
              <i class="fa-solid fa-clipboard-check"></i>
              კამპანიის მიმოხილვა
            </button>
          </div>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex items-center gap-4 rounded-2xl border border-blue-100/60 bg-blue-50/40 px-5 py-4"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
              <i :class="stat.icon" class="text-lg"></i>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wide text-black/60">{{ stat.label }}</p>
              <p class="text-lg font-semibold text-black">{{ stat.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 rounded-3xl border border-blue-100/80 bg-white p-6 shadow-sm">
        <h2 class="text-sm font-semibold uppercase tracking-wide text-black/60">დღის ამოცანები</h2>
        <div class="space-y-4">
          <div
            v-for="task in tasks"
            :key="task.title"
            class="rounded-2xl border border-blue-100/60 bg-white px-4 py-3"
          >
            <p class="text-sm font-semibold text-black">{{ task.title }}</p>
            <p class="text-xs text-black/60">{{ task.caption }}</p>
            <div class="mt-3 flex items-center gap-2">
              <span class="h-2 w-2 rounded-full" :class="task.dot"></span>
              <span class="text-xs text-black/60">{{ task.status }}</span>
            </div>
          </div>
        </div>
        <button class="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-secondary bg-secondary/10 px-4 py-2 text-sm font-semibold text-black">
          <i class="fa-solid fa-calendar"></i>
          სრული გეგმა
        </button>
      </div>
    </section>

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
const stats = [
  { label: "აქტიური გვერდები", value: "12", icon: "fa-solid fa-layer-group" },
  { label: "დაგეგმილი სიახლეები", value: "5", icon: "fa-solid fa-calendar-check" },
  { label: "ბოლო განახლება", value: "დღეს 14:30", icon: "fa-solid fa-clock" },
  { label: "გამოქვეყნებული განცხადებები", value: "8", icon: "fa-solid fa-bullhorn" },
];

const tasks = [
  {
    title: "მთავარი ბანერის განახლება",
    caption: "გაზაფხულის კამპანიის ვიზუალები.",
    status: "პრიორიტეტი: მაღალი",
    dot: "bg-rose-400",
  },
  {
    title: "სერვის ცენტრების რუკა",
    caption: "ახალი ლოკაციების დამატება.",
    status: "პრიორიტეტი: საშუალო",
    dot: "bg-amber-400",
  },
  {
    title: "კრიზისული შეტყობინებები",
    caption: "სოციალური არხების სინქრონიზაცია.",
    status: "მზადდება",
    dot: "bg-emerald-400",
  },
];

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
