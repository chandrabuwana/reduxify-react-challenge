const statenews = {
  news: [],
  newsone: []
}

export const newsReducers = (state = statenews, action) => {
  switch (action.type) {
    case 'GET_NEWS_SUCCESS':
      return {...state, news: action.news.articles}
    case 'GET_NEWS_ONE_SUCCESS':
      return {...state, newsone: action.newsone}
    default:
      return state;
  }
};