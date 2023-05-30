<template lang="pug">

div(class="flex justify-center w-full bg-gradient-to-b from-[#312749] to-[#222038] relative")
  div(class="relative p-2 bg-gradient-to-b from-[#46375f] to-[#2b2647] flex justify-center w-full shadow-2xl max-w-[800px]")
    div(
      class="px-10 pt-8 w-full h-full outline-none max-w-[800px] p-4 text-lg text-gray-100 scrollbar relative"
    )
      div(v-show="showPaper")
        md-home(v-if="context === 'home'")
        md-gpixi(v-if="context === 'gpixi'")


</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"

const context = computed(() => gstore().context)
const showPaper = computed(() => gstore().showPaper)

onMounted(() => {})
</script>
