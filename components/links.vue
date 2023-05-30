<template lang="pug">

div(
  class="flex flex-col overflow-y-auto mt-1"
)
  button(
    v-for="(item, key) in items"
    :key="key"
    class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#2a2137] hover:text-white rounded-md hover:cursor-pointer"
    :class="{'bg-[#3d3050] hover:bg-[#3d3050]': key === activeKey}"
    @click="handleClick(key)"
  ) {{ item }}

</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"

const activeKey = ref(0)

const context = computed(() => gstore().context)

const handleClick = function (key) {
  gstore().context = items.value[key]
  activeKey.value = key
  setTimeout(() => {
    prism.highlightAll()
  }, 0)
}

const items = ref(["home", "gpixi"])

//
</script>
