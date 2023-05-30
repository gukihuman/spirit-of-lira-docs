<template lang="pug">

div(
  class="flex-1 overflow-y-auto mt-1"
)


  div(class="text-gray-300 text-md py-2 px-2 transition-colors duration-200 hover:bg-[#332843] hover:text-white rounded-md items-center")
  button(
    v-for="(item, key) in items"
    :key="key"
    class="text-gray-300 text-md py-2 px-2 transition-colors duration-200 hover:bg-[#332843] hover:text-white rounded-md items-center hover:cursor-pointer"
    :class="{'bg-gray-700 hover:bg-gray-700': key === activeKey}"
    @click="handleClick(key)"
  ) {{ item }}

  //-   button euo

</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"

const activeKey = ref(0)

const context = computed(() => gstore().context)

const handleClick = function (key) {
  // prevent flickering
  if (key === activeKey.value) return
  gstore().showPaper = false

  gstore().context = items.value[key]
  activeKey.value = key
  setTimeout(() => {
    gstore().showPaper = true
    prism.highlightAll()
  }, 0)
}

const items = ref(["home", "gpixi"])

//
</script>
