<template lang="pug">

div(class="flex flex-row bg-gray-700")
  sidebar
  paper

</template>

<script setup>
onMounted(() => {
  // just to initiate prismjs
  let p = prism
})
</script>

<style>
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #5a4c6e;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #705f87;
}
::-webkit-scrollbar-corner {
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 16px;
}
</style>
