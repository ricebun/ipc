import { createSlice } from '@reduxjs/toolkit';

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    fetchingStatus: {
      requesting: false,
      success: false,
      failure: false,
    },
  },
  reducers: {
    loadArticles: (state) => {
      state.fetchingStatus = {
        requesting: true,
        success: false,
        failure: false,
      };
    },
    loadArticlesSuccess: (state, action) => {
      state.fetchingStatus = {
        requesting: false,
        success: true,
        failure: false,
      };
      state.articles = action.payload;
    },
    loadArticlesFailure: (state) => {
      state.fetchingStatus = {
        requesting: false,
        success: false,
        failure: true,
      };
    },
  },
});

export const { loadArticles, loadArticlesSuccess, loadArticlesFailure } =
  articlesSlice.actions;

export default articlesSlice.reducer;
