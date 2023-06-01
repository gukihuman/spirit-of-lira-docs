class Store {
  gstore = glib.store({
    context: "",
    showPaper: false,
    filter: [],
  })

  get context() {
    return this.gstore().context
  }
  set context(context: string) {
    this.gstore().context = context
  }

  get showPaper() {
    return this.gstore().showPaper
  }
  set showPaper(showPaper: boolean) {
    this.gstore().showPaper = showPaper
  }

  get filter() {
    return this.gstore().filter
  }
  set filter(filter: string[]) {
    this.gstore().filter = filter
  }
}
export const gstore = new Store()
