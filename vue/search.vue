<template lang="pug">

div(class="flex flex-row justify-end items-center mt-1 mb-2 py-2 pl-0 relative")
  input(class="w-full absolute bg-[#2a223f] rounded-md focus:outline-none focus:bg-[#3e325c] transition-colors duration-200 text-gray-100 p-2 pl-4 hover:bg-[#342a4f]" @input="handleInput($event.target.value)")
  svg-search(class="text-gray-400 relative mr-2")


</template>
<script setup lang="ts">
//
const linkList = STORE.linkList

const handleInput = function (value) {
  STORE.searchInput = value
  debouncedSearch()
}

onMounted(() => debouncedSearch())

//
</script>
