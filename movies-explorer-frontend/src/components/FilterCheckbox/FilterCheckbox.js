import './FilterCheckbox.css';

function FilterCheckbox({ label }) {
  return (
    <label className='filter-checkbox'>
      <span className='filter-checkbox__label'>{label}</span>
      <input className='filter-checkbox__default' type='checkbox' />
      <span className='filter-checkbox__slider' />
    </label>
  );
}

export default FilterCheckbox;