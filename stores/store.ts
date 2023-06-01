export const gstore = defineStore("gstore", {
  state: (): { [index: string]: any } => ({
    context: "",
    showPaper: false,
    filter: [],
  }),
})
