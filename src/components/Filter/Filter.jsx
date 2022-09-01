import React from 'react';
import s from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeFilterValue } from '../../redux/contactsSlice';

const Filter = () => {
  const filterValue = useSelector(state => state.filterValue.value);
  const dispatch = useDispatch();
  return (
    <div className={s.filterContainer}>
      <p>Find contacts by name</p>
      <input
        className={s.filterInput}
        name="filter"
        value={filterValue}
        onChange={e => {
          dispatch(changeFilterValue(e.currentTarget.value));
        }}
      ></input>
    </div>
  );
};

export default Filter;
