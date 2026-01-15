<template>
  <nav class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
    <div class="mx-auto flex h-16 w-full items-center justify-between px-8">

      <div class="flex items-center gap-4">
        <router-link to="/" class="flex items-center gap-3">
          <div class="flex items-center justify-center">
            <img src="/wlogo.png" alt="Water.gov.ge logo" class="h-12 w-auto object-contain shrink-0">
          </div>
        </router-link>
      </div>

      <div class="flex flex-1 justify-center">
        <nav class="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/70 p-2 text-sm font-medium md:flex">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="rounded-full px-4 py-2 transition-colors duration-200"
            :class="isActive(link.to)
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'"
          >
            {{ link.label }}
          </router-link>
        </nav>
      </div>

      <div class="flex items-center">
        <div class="relative">
          <button
            @click="profileOpen = !profileOpen"
            class="flex items-center gap-3 rounded-full bg-blue-600 px-4 py-2 text-white shadow-sm transition hover:bg-blue-700"
          >
            <span class="text-sm font-semibold">{{ userName }}</span>
            <span class="text-xs font-semibold opacity-90">{{ userPosition }}</span>
            <svg class="h-4 w-4 opacity-90" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.1l3.71-3.88a.75.75 0 1 1 1.08 1.04l-4.24 4.44a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>

          <div
            v-if="profileOpen"
            class="absolute right-0 mt-3 w-60 rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden"
          >
            <button
              @click="onSignOut"
              class="w-full px-4 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              სისტემიდან გამოსვლა
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-100/80 bg-white/80 px-4 py-3 md:hidden">
      <nav class="flex flex-wrap gap-2 text-sm font-medium">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="rounded-full px-3 py-2 transition-colors duration-200"
          :class="isActive(link.to)
            ? 'bg-blue-600 text-white shadow-sm'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-blue-600'"
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
  alert("სისტემიდან გამოსვლა შესრულდა");
  profileOpen.value = false;
};
</script>