<template>
  <div class="bg-white shadow-md rounded-2xl p-6 mt-8">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800">გვერდების რედაქტირება</h2>
      <button
        class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition"
      >
        + ახალი გვერდი
      </button>
    </div>

    <!-- Controls -->
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
      <div class="flex items-center space-x-2">
        <label class="text-gray-600 text-sm">ჩვენება:</label>
        <select
          v-model="entriesPerPage"
          class="border border-gray-300 rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option v-for="n in [10,25,50,100]" :key="n" :value="n">{{ n }}</option>
        </select>
        <span class="text-gray-600 text-sm">ჩანაწერი თითო გვერდზე</span>
      </div>

      <div class="relative w-full md:w-64">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="ძებნა..."
          class="w-full border border-gray-300 rounded-lg pl-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
      </div>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto border border-gray-200 rounded-xl">
      <table class="w-full text-sm text-gray-700">
        <thead class="bg-gray-50 border-b">
          <tr>
            <th class="px-4 py-3 text-left font-semibold">#</th>
            <th class="px-4 py-3 text-left font-semibold">დასახელება</th>
            <th class="px-4 py-3 text-left font-semibold">რედაქტირება</th>
            <th class="px-4 py-3 text-left font-semibold">წაშლა</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedItems"
            :key="item.id"
            class="border-b hover:bg-blue-50 transition"
          >
            <td class="px-4 py-3">{{ index + 1 + (currentPage - 1) * entriesPerPage }}</td>
            <td class="px-4 py-3 font-medium">{{ item.title }}</td>
            <td class="px-4 py-3">
              <button
                @click="editItem(item)"
                class="text-blue-600 hover:text-blue-800 transition"
                title="რედაქტირება"
              >
                <i class="fas fa-edit"></i>
              </button>
            </td>
            <td class="px-4 py-3">
              <button
                @click="deleteItem(item.id)"
                class="text-red-600 hover:text-red-800 transition"
                title="წაშლა"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

 
    <div
      class="flex justify-between items-center mt-4 text-sm text-gray-600 flex-wrap gap-2"
    >
      <p>ნაჩვენებია {{ startItem }}-დან {{ endItem }}-მდე {{ filteredItems.length }}-დან</p>

      <div class="flex items-center space-x-2">
        <button
          :disabled="currentPage === 1"
          @click="currentPage--"
          class="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-40"
        >
          წინა
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-3 py-1 rounded-lg border transition',
            currentPage === page
              ? 'bg-blue-600 text-white border-blue-600'
              : 'border-gray-300 hover:bg-gray-100'
          ]"
        >
          {{ page }}
        </button>

        <button
          :disabled="currentPage === totalPages"
          @click="currentPage++"
          class="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-40"
        >
          შემდეგი
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, title: 'მთავარი' },
  { id: 2, title: 'კომპანიის შესახებ' },
  { id: 3, title: 'მედიაცენტრი' },
  { id: 4, title: 'პროექტები' },
  { id: 5, title: 'ტენდერები' },
  { id: 6, title: 'კონტაქტი' },
  { id: 7, title: 'კარიერა' },
  { id: 8, title: 'განცხადებები' },
  { id: 9, title: 'გალერეა' },
  { id: 10, title: 'მომსახურება' },
])

const searchQuery = ref('')
const currentPage = ref(1)
const entriesPerPage = ref(10)

const filteredItems = computed(() => {
  if (!searchQuery.value) return items.value
  return items.value.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const totalPages = computed(() =>
  Math.ceil(filteredItems.value.length / entriesPerPage.value)
)
const startItem = computed(() => (currentPage.value - 1) * entriesPerPage.value + 1)
const endItem = computed(() =>
  Math.min(startItem.value + entriesPerPage.value - 1, filteredItems.value.length)
)

const paginatedItems = computed(() =>
  filteredItems.value.slice(startItem.value - 1, endItem.value)
)

const editItem = (item) => alert('რედაქტირება: ' + item.title)
const deleteItem = (id) => (items.value = items.value.filter((i) => i.id !== id))
</script>

<style scoped>
* {
  font-family: 'FiraGO', sans-serif;
}
</style>
