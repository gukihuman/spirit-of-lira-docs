class Store {
  store = glib.store({
    activePaper: "",
    linkList: {},
    searchFilter: [],
    searchFilterCategory: [],
  })

  // direct getters is bad practice, cuz it's very repetetive
  // only for super small stores
  get activePaper() {
    return this.store().activePaper
  }
  set activePaper(activePaper: string) {
    this.store().activePaper = activePaper
  }

  get linkList() {
    return this.store().linkList
  }
  set linkList(linkList: { [key: string]: string[] }) {
    this.store().linkList = linkList
  }

  get searchFilter() {
    return this.store().searchFilter
  }
  set searchFilter(searchFilter: string[]) {
    this.store().searchFilter = searchFilter
  }

  get searchFilterCategory() {
    return this.store().searchFilterCategory
  }
  set searchFilterCategory(searchFilterCategory: string[]) {
    this.store().searchFilterCategory = searchFilterCategory
  }
}
export const STORE = new Store()
