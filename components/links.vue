<template lang="pug">

div(
  class="flex flex-col overflow-y-auto mt-1"
)

  div(v-for="(item, key) in defaults")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleDefaultsClick(key)"
    ) {{ formatItem(item) }}

  p(class="text-gray-300 font-semibold text-sm pl-1 pr-1 mt-4") Core


  div(v-for="(item, key) in core")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleCoreClick(key)"
    ) {{ formatItem(item) }}
      

  p(class="text-gray-300 font-semibold text-sm pl-1 pr-1 mt-4") UI

  div(v-for="(item, key) in ui")
    button(
      v-if="checkFilter(item)"
      :key="key"
      class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer w-full"
      :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
      @click="handleUIClick(key)"
    ) {{ formatItem(item) }}



</template>
<script setup lang="ts">
import { gstore } from "~/composables/store"
import linkList from "@/link-list.json"

const checkFilter = computed(() => (item) => {
  return !gstore.filter.includes(_.lowerCase(item))
})

const defaults = ref(linkList.defaults)
const core = ref(linkList.core)
const ui = ref(linkList.ui)

const activeKey = ref(0)

const context = computed(() => gstore.context)

const handleDefaultsClick = function (key) {
  gstore.context = defaults.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 30)
}
const handleCoreClick = function (key) {
  gstore.context = core.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 30)
}
const handleUIClick = function (key) {
  gstore.context = ui.value[key]
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
