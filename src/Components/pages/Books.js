/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const booklist = useSelector((state) => state.books);
  return (
    <>
      <ul>
        {
          booklist.map((book) => (<Book key={book.id} title={book.title} author={book.author} id={book.id} />))
        }
      </ul>
      <hr />
      <h2 className="navigation">
        ADD NEW BOOK
      </h2>
      <Form />
    </>
  );
};

export default Books;
