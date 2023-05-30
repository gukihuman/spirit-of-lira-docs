<template lang="pug">

div(class="flex justify-center w-full bg-gradient-to-b from-[#312749] to-[#292443] relative")
  div(class="relative bg-[#3c314d] flex justify-center w-full shadow-2xl max-w-[800px]")
    div(
      class="w-full h-full outline-none max-w-[800px] text-lg text-gray-100 scrollbar relative"
    )
      transition
        md-home(v-if="context === 'home'" class="absolute w-full px-10 pt-8")
      transition
        md-gpixi(v-if="context === 'gpixi'" class="absolute w-full px-10 pt-8")


</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"

const context = computed(() => gstore().context)
const showPaper = computed(() => gstore().showPaper)
//
// manually prevent prism flickering on mount
// while in switching - transition smoothes this one flickering frame
onMounted(() => {
  gstore().context = "home"
})
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
