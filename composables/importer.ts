import p from "prismjs"
export const prism = p

import lodash from "lodash"
export const _ = lodash

export default defineNuxtPlugin(async () => {
  //
  const entities = import.meta.glob("@/components/**")
  for (const path in entities) {
    const entity = await entities[path]()
    console.log(entity)
    // const name = `${_.toLower(entity.default.name)}`
    // gstorage.entities.set(name, entity.default)
  }
})
