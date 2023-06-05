<template lang="pug">

div(
  class="flex flex-col overflow-y-auto mt-1"
)

  div(v-for="(item, key) in defaults")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full font-montserrat"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleDefaultsClick(key)"
    ) {{ formatItem(item) }}

  p(class="text-gray-300 font-semibold text-sm pl-1 pr-1 mt-4 font-montserrat") Core


  div(v-for="(item, key) in core")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full font-montserrat"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleCoreClick(key)"
    ) {{ formatItem(item) }}
      

  p(class="text-gray-300 font-semibold text-sm pl-1 pr-1 mt-4 font-montserrat") UI

  div(v-for="(item, key) in ui")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full font-montserrat"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleUIClick(key)"
    ) {{ formatItem(item) }}



</template>
<script setup lang="ts">
// import { STORE } from "~/composables/store"
import linkList from "@/link-list.json"

const checkFilter = computed(() => (item) => {
  return !STORE.searchFilter.includes(_.lowerCase(item))
})

const defaults = ref(linkList.defaults)
const core = ref(linkList.core)
const ui = ref(linkList.ui)

const activeKey = ref(0)

const activePaper = computed(() => STORE.activePaper)

const handleDefaultsClick = function (key) {
  STORE.activePaper = defaults.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 30)
}
const handleCoreClick = function (key) {
  STORE.activePaper = core.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 30)
}
const handleUIClick = function (key) {
  STORE.activePaper = ui.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 30)
}

const formatItem = function (input) {
  // Remove "-" symbol and capitalize each word
  const formattedString = input
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())

  return formattedString
}
</script>
