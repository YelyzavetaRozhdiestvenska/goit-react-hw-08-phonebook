import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={onChange}
        placeholder="Search..."
        type="text"
        name="filter"
      ></input>
    </>
  );
};
