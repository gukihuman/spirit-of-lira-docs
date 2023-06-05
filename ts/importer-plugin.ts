export default defineNuxtPlugin(async () => {
  //
  // fill linkList by files from vue/md
  // folders became keys, file names construct an array as a value
  STORE.linkList = {}
  //
  const entities = import.meta.glob("@/vue/**")
  for (const path in entities) {
    let onlyMD = path.match(/md/)
    if (!onlyMD) continue

    let cleaned = onlyMD.input?.replace(/\/vue\/md\//, "")
    if (!cleaned) continue

    cleaned = cleaned.replace(/\.md$/, "")

    let category
    if (!cleaned.match(/\//)) {
      category = "default"
    } else {
      category = cleaned.replace(/\/(.*)/, "")
    }
    let name = cleaned.replace(/(.*)\//, "")

    if (!STORE.linkList[category]) STORE.linkList[category] = []

    STORE.linkList[category].push(name)
  }

  // make default category first in the object
  const reorderProperty = "default"
  const newLinkList = {
    [reorderProperty]: STORE.linkList[reorderProperty],
    ...Object.entries(STORE.linkList)
      .filter(([key]) => key !== reorderProperty)
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {}),
  }
  STORE.linkList = newLinkList
})
