import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';
import { Title, Search } from './filter.styled';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };
  return (
    <>
      <Title>Find contacts by name</Title>
      <Search
        value={value}
        onChange={onChange}
        placeholder="Search..."
        type="text"
        name="filter"
      ></Search>
    </>
  );
};
