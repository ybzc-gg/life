export const state = () => ({
  slideOpened: false,
  theme: 'default',
  barraging: false,
  articleList: {
    content: [],
    empty:true,
    first:true,
    last:true,
    number:0,
    numberOfElements:0,
    size:10,
    totalElements:0,
    totalPages: 0,
  },
})

export const mutations = {
  changeSlideOpened(state, slideOpened) {
    state.slideOpened = slideOpened
  },
  cahngeTheme(state, theme) {
    state.theme = theme
  },
  changeBarraging(state, barragin) {
    state.barraging = barragin
  },
  setArticleList(state, articleList) {
    state.articleList = articleList
  },
  pushArticleList(state, articleList) {
    const content = [...state.articleList.content,...articleList.content]
    const unique = new Map();
    state.articleList = articleList
    state.articleList.content = content.filter((item) => !unique.has(item.id) && unique.set(item.id, 1))
  }
}
