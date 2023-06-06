class Store {
  store = glib.store({
    activePaper: "",
    dev: false,
    linkList: {},
    searchInput: "",
    searchFilter: [],
    searchFilterCategory: [],
    loading: true,
  })

  // direct getters is bad practice, cuz it's very repetetive
  // only for super small stores

  get activePaper() {
    return this.store().activePaper
  }
  set activePaper(activePaper: string) {
    this.store().activePaper = activePaper
  }

  get dev() {
    return this.store().dev
  }
  set dev(dev: boolean) {
    this.store().dev = dev
  }

  get linkList() {
    return this.store().linkList
  }
  set linkList(linkList: { [key: string]: string[] }) {
    this.store().linkList = linkList
  }

  get searchInput() {
    return this.store().searchInput
  }
  set searchInput(searchInput: string) {
    this.store().searchInput = searchInput
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

  get loading() {
    return this.store().loading
  }
  set loading(loading: boolean[]) {
    this.store().loading = loading
  }
}
export const STORE = new Store()
