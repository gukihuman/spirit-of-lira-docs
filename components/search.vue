<template lang="pug">

div(class="flex flex-row justify-end items-center py-2 pl-0 relative")
  input(class="w-full absolute bg-[#302748] rounded-md focus:outline-none focus:bg-[#403460] transition-colors duration-200 text-gray-100 p-2 pl-4 hover:bg-[#403460]" @input="debouncedSearch($event.target.value)")
  svg-search(class="text-gray-400 relative mr-2")


</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"
import linkList from "@/link-list.json"

const debouncedSearch = _.debounce(function (value) {
  const allArray = [...linkList.items, ...linkList.ui]
  gstore().filter = allArray.filter((item) => !item.includes(value))
}, 200)

//
</script>
