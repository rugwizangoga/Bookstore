export const ADD_BOOK = 'redux/books/ADD_BOOK';
export const REMOVE_BOOK = 'redux/books/REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const initialState = [];

export default function bookstoreReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.bookId)];
    default:
      return state;
  }
}

// import { createSlice } from '@reduxjs/toolkit';

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: [],
//   reducers: {
//     addBook: (state, action) => {
//       state.push(action.payload);
//       // console.log(state);
//     },
//     removeBook: (state, action) => {
//       state.filter((book) => book.id !== action.payload);
//       // console.log(state);
//     },
//   },
// });

// export default booksSlice;
