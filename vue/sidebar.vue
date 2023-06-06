<template lang="pug">
div(class="h-screen min-w-[260px] bg-[#1e1729] p-2 flex flex-col")

  p(v-if="STORE.loading" class="text-center font-montserrat text-lg pt-4") Loading...


  gheader(v-if="!STORE.loading")

  search(v-if="!STORE.loading")

  links

  //- add bottom-menu

</template>
