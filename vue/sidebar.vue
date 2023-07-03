<template lang="pug">
div(class="h-screen min-w-[260px] bg-[#1b1729] p-2 flex flex-col px-3")

  p(v-if="STORE.loading" class="text-center font-montserrat text-lg pt-4") Loading...


  top(v-if="!STORE.loading")

  search(v-if="!STORE.loading")

  links

  //- add bottom-menu

</template>
