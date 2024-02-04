import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from '../../redux/contactsSlice';
import { selectContactsFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const handleChangeFilter = event => {
    const value = event.target.value;
    const action = setFilter(value);
    dispatch(action);
  };

  return (
    <div>
      <label className={css['filter-label']}>
        <span className={css['filter-label-text']}>Find contacts by name</span>
        <input
          className={css['filter-input']}
          type="text"
          name="keywords"
          onChange={handleChangeFilter}
          value={filter}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};
