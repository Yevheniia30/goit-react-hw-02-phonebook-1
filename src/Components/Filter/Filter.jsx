import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        className={s.input}
        value={filter}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
