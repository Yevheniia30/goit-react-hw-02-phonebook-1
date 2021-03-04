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

export default Filter;
