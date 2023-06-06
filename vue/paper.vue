<template lang="pug">

div(class="flex justify-center w-full bg-gradient-to-b from-[#312749] to-[#292443] relative")
  div(class="relative bg-[#3c314d] flex justify-center w-full shadow-2xl max-w-[900px]")
    div(
      class="scrollbar w-full h-full outline-none max-w-[900px] text-lg text-[#e1e1e1] overflow-y-auto relative"
    )
      div(
        v-for="(categoryList, category) in STORE.linkList" :key="category"
      )
        div(
          v-for="(paper, key) in categoryList" :key="key"
        )
          transition
            div(v-if="STORE.activePaper === paper" class="absolute w-full px-10 pt-8 pb-10")
              component(:is="resolvePaper(category, paper)")


</template>

<script setup lang="ts">
//
const resolvePaper = function (category: string, paper: string) {
  //
  if (category === "default") {
    return "md-" + paper
  } else {
    return "md-" + category + "-" + paper
  }
}

onMounted(() => {
  STORE.activePaper = "fullscreen"
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

.scrollbar {
  scrollbar-gutter: stable both-edges;
}

/* Markdown styling */

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

blockquote {
  margin: 15px 0 15px 0;
  border-left: 4px solid #564b68;
  padding-top: 8px;
  padding-bottom: 1px;
  padding-left: 15px;
  background-color: #32243d;
  border-radius: 5px;
}

/* Style horizontal rules */
hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
}
</style>
