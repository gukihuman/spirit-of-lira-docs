<template lang="pug">

div(class="flex flex-row bg-gray-700")
  sidebar
  paper

</template>

<script setup>
onMounted(() => {
  // just to initiate prismjs
  let p = prism
  prism.languages.pug = {
    "plain-text": {
      pattern:
        /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m,
      lookbehind: true,
    },
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m,
      lookbehind: true,
    },
    attrpug: {
      pattern: /\(([^)]+)\)/,
      inside: {
        punctuation: /[!(),]+/,
        string: /"(.*)"/,
      },
    },
    tagpug: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: true,
    },
  }
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
