import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'store/filter/slice';
import { selectFilter } from 'store/filter/selectors';
import Wrapper from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);

  const filterChangeHandler = ev => {
    dispatch(filterChange(ev.target.value));
  };

  return (
    <Wrapper>
      <label>
        Find contacts by name:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={filterChangeHandler}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></input>
      </label>
    </Wrapper>
  );
};

export default Filter;
