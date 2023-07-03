<template lang="pug">

div(class="flex flex-col overflow-y-auto -mt-2")

  //- special home link
  button(
    v-if="checkSearchFilter('home')"
    class="text-start text-gray-300 text-md py-2 pl-4 pr-2 transition-colors duration-200 hover:bg-[#312740] hover:text-white rounded-md hover:cursor-pointer w-full font-montserrat mt-2"
    :class="{'bg-[#45375a] hover:bg-[#45375a]': 'home' === STORE.activePaper}"
    @click="handleClick('home')"
  ) {{ formatPaper('home') }}

  div(v-for="(categoryList, category) in STORE.linkList" :key="category")

    p(
      v-if="checkSearchFilterCategory(category)"
      class="text-gray-300 font-semibold text-[12px] pl-1 pr-1 mt-3 font-montserrat mb-0"
    ) {{category === "default" ? "" : category.toUpperCase()}}

    div(v-for="(paper, key) in categoryList" :key="key")

      button(
        v-if="checkSearchFilter(paper)"
        class="text-start text-gray-300 text-md py-[6px] pl-4 pr-2 transition-colors duration-200 hover:bg-[#312740] hover:text-white rounded-md hover:cursor-pointer w-full font-montserrat"
        :class="{'bg-[#45375a] hover:bg-[#45375a]': paper === STORE.activePaper}"
        @click="handleClick(paper)"
      ) {{ formatPaper(paper) }}


</template>
<script setup lang="ts">
//
const checkSearchFilter = computed(() => (item) => {
  return STORE.searchFilter.includes(item)
})

const checkSearchFilterCategory = computed(() => (item) => {
  return STORE.searchFilterCategory.includes(item)
})

const handleClick = function (paper) {
  STORE.activePaper = paper
  localStorage.setItem("activePaper", STORE.activePaper)
}

const formatPaper = function (paper) {
  // Remove "-" symbol and capitalize each word
  const formattedString = paper
    .replace(/-/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase())

  return formattedString
}
</script>
