import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import bookstoreReducer from './books/books';
import reducerForCategories from './categories/categories';

const reducer = combineReducers({
  books: bookstoreReducer,
  categories: reducerForCategories,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production' && composeWithDevTools(),
});

export default store;
