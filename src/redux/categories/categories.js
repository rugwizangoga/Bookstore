const BOOK_STATUS = 'redux/categories/CHECKED_STATUS';

const initialState = [];
export const bookStatus = () => ({
  type: BOOK_STATUS,
});

const reducerForCategories = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_STATUS:
      return [...state, 'Under construction'];
    default:
      return state;
  }
};

export default reducerForCategories;
