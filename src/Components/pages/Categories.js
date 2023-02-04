import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookStatus } from '../../redux/categories/categories';
import Button from './button';

const Categories = () => {
  const status = useSelector((state) => state.categories || []);
  const dispatch = useDispatch();
  const checkstatus = () => {
    dispatch(bookStatus());
  };
  return (
    <>
      <Button color="#0290ff" text="Check status" onClick={checkstatus} />
      <h5>{status}</h5>
    </>
  );
};

export default Categories;
