import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import Button from './button';
import { addBook } from '../../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({});
  const handleChange = (event) => {
    setBook({
      ...book,
      id: nanoid(),
      [event.target.name]: event.target.value,
    });
  };
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    setBook({
      id: '',
      title: '',
      author: '',
    });
  };
  return (
    <form onSubmit={addNewBook} className="bookcontainer">
      <input type="text" name="title" placeholder="Book Title" onChange={handleChange} />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} />
      <Button onClick={addNewBook} color="#0290ff" text="Add" />
    </form>
  );
};
export default Form;
