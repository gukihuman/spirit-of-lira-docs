<template lang="pug">

div(class="flex justify-center w-full bg-gradient-to-b from-[#312749] to-[#292443] relative")
  div(class="relative bg-[#3c314d] flex justify-center w-full shadow-2xl max-w-[900px]")
    div(
      class="w-full h-full outline-none max-w-[900px] text-lg text-[#e1e1e1] scrollbar overflow-y-auto relative"
    )

      transition
        div(v-if="context === 'home'" class="absolute w-full px-10 pt-8")
          md-home
      transition
        div(v-if="context === 'input-controller'" class="absolute w-full px-10 pt-8")
          md-input-controller
      transition
        div(v-if="context === 'gpixi'" class="absolute w-full px-10 pt-8")
          md-gpixi
      transition
        div(v-if="context === 'fullscreen'" class="absolute w-full px-10 pt-8")
          md-ui-fullscreen


</template>
<script setup lang="ts">
import { gstore } from "@/stores/store"
const context = computed(() => gstore().context)
const showPaper = computed(() => gstore().showPaper)
//
// manually prevent prism flickering on mount
// while in switching - transition smoothes this one flickering frame
onMounted(() => {
  gstore().context = "input-controller"
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

h1 {
  font-weight: 500;
  font-size: 32px;
  padding-top: 10px;
  padding-bottom: 32px;
  margin-bottom: 10px;
}

h2 {
  font-weight: 500;
  font-size: 26px;
  padding-top: 10px;
  padding-bottom: 16px;
  margin-bottom: 16px;
}

h3 {
  font-weight: 500;
  font-size: 20px;
  padding-top: 10px;
  margin-bottom: 20px;
}
h4 {
  font-size: 18px;
  padding-top: 8px;
  margin-bottom: 8px;
}

h1,
h2 {
  border-bottom: 2px solid #57555c;
}

p {
  margin-bottom: 8px;
  line-height: 1.5;
  color: #e1e1e1;
}

br {
  display: block;
  content: "";
  margin-top: 32px;
}

a {
  color: #007bff;
  text-decoration: none;
}

ul,
ol {
  margin-bottom: 10px;
}

li {
  margin-left: 20px;
}

/* Style blockquotes */
blockquote {
  margin-left: 20px;
  border-left: 2px solid #ccc;
  padding-left: 10px;
}

/* Style horizontal rules */
hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
}
</style>
