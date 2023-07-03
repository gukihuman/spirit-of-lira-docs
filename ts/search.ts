export const debouncedSearch = _.debounce(function () {
  const input = STORE.searchInput
  let match
  if (input === "") match = /(.*)/
  else match = input

  // fill search filter
  const allArray: string[] = []
  allArray.push("home")
  _.forEach(STORE.linkList, (paper) => allArray.push(...paper))
  STORE.searchFilter = allArray.filter((item) => item.match(input))
  if (!STORE.dev) {
    STORE.searchFilter = STORE.searchFilter.filter(
      (item) => !item.toLowerCase().match("dev")
    )
  }

  // fill search category filter
  const allCategoryArray: string[] = _.keys(STORE.linkList)
  STORE.searchFilterCategory = allCategoryArray.filter((item) => {
    let result = false
    STORE.linkList[item].forEach((paper) => {
      if (STORE.searchFilter.includes(paper)) result = true
    })
    return result
  })
}, 200)
