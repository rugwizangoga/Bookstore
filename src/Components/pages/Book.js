import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './button';
import { removeBook } from '../../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookcontainer">
      <div className="book">
        <div className="details">
          <h3>{title}</h3>
          <p className="author">{author}</p>
        </div>
        <Button
          onClick={() => {
            dispatch(removeBook(id));
          }}
          color="red"
          text="Remove"
        />
      </div>
      <Button color="#0290ff" text="UPDATE PROGRESS" />
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
