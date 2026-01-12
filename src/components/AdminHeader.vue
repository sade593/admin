<template>
  <nav class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div class="flex items-center gap-4">
        <router-link to="/" class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10">
            <img src="/water-logo.jpg" alt="Water.gov.ge logo" class="h-8 w-8 object-contain">
          </div>
          <div class="hidden sm:block">
            <p class="text-sm font-semibold text-black">Water.gov.ge</p>
            <p class="text-xs text-black/60">Admin Panel</p>
          </div>
        </router-link>
      </div>

      <nav class="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 p-2 text-sm font-medium text-black/70 shadow-sm md:flex">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-4 py-2 transition"
          :class="isActive(link.to)
            ? 'bg-secondary text-white shadow-sm'
            : 'hover:bg-slate-100 hover:text-black'"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <div class="flex items-center gap-4">
        <div class="relative">
          <button
            @click="profileOpen = !profileOpen"
            class="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-2 py-1 shadow-sm transition hover:border-slate-300"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-sky-400 text-sm font-semibold text-white uppercase">
              {{ userInitials }}
            </span>
            <span class="hidden text-left sm:block">
              <span class="inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-white">
                {{ userName }}
              </span>
              <span class="inline-flex rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                {{ userPosition }}
              </span>
            </span>
            <i class="fa-solid fa-chevron-down hidden text-xs text-slate-400 sm:block"></i>
          </button>

          <div
            v-if="profileOpen"
            class="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white shadow-xl"
          >
            <div class="p-4">
              <p class="text-sm font-semibold text-black">{{ userName }}</p>
              <p class="text-xs text-black/60">{{ userPosition }}</p>
            </div>
            <div class="border-t border-slate-100">
              <button
                @click="onSignOut"
                class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-black/70 transition hover:bg-slate-50 hover:text-black"
              >
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                გამოსვლა
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-100/80 bg-white/80 px-4 py-3 md:hidden">
      <nav class="flex flex-wrap gap-2 text-sm font-medium text-black/70">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-3 py-2 transition"
          :class="isActive(link.to)
            ? 'bg-secondary text-white shadow-sm'
            : 'bg-slate-100 text-black/70 hover:bg-slate-200'"
        >
          {{ link.label }}
        </router-link>
      </nav>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const profileOpen = ref(false);
const route = useRoute();

const userName = "სანდრო ადეიშვილი";
const userInitials = "SA";
const userPosition = "პროგრამისტი";

const navLinks = [
  { to: "/main-menu", label: "მთავარი მენიუ" },
  { to: "/news", label: "სიახლეები" },
  { to: "/announcements", label: "განცხადებები" },
  { to: "/centers", label: "სერვის ცენტრები" },
  { to: "/parameters", label: "პარამეტრები" },
];

const isActive = (path) => route.path === path;

const onSignOut = () => {
  alert("გამოსვლა წარმატებით შესრულდა");
  profileOpen.value = false;
};
</script>
