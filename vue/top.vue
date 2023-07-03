<template lang="pug">

div(class="flex flex-row justify-between")
  div(class="text-gray-300 text-md py-2 px-2 transition-colors rounded-md items-center font-semibold font-montserrat") Spirit of Lira docs

  //- 📜 turn on when "dev" links are added
  //- button(class="py-1" @click="handleClick()")
  //-   div(
  //-     class="text-gray-300 text-sm font-semibold font-montserrat transition-colors rounded-md items-center bg-[#362b45] py-[5px] px-[10px] hover:bg-[#403450]"
  //-     :class="{'bg-[#4b3e60] hover:bg-[#55466b]': dev}"
  //-   ) Dev

</template>

<script setup lang="ts">
//
const dev = computed(() => STORE.dev)

const handleClick = function () {
  STORE.dev = !STORE.dev
  localStorage.setItem("devLinks", _.toString(STORE.dev))
  debouncedSearch()
}
</script>
