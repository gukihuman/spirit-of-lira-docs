<template lang="pug">

div(class="flex flex-row bg-gray-700")
  sidebar
  paper

</template>

<script setup>
// 📜 do independent list of developer parts of engine using * in the name
// being agle to toggle on/off those parts via button

onMounted(() => {
  PRISM_MANAGER.init(prism)
  setInterval(() => prism.highlightAll(), 30)

  if (!localStorage.getItem("devLinks")) {
    localStorage.setItem("devLinks", _.toString(STORE.dev))
  } else {
    STORE.dev = JSON.parse(localStorage.getItem("devLinks"))
  }

  if (!localStorage.getItem("activePaper")) {
    localStorage.setItem("activePaper", STORE.activePaper)
  } else {
    STORE.activePaper = localStorage.getItem("activePaper")
  }

  STORE.loading = false
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
