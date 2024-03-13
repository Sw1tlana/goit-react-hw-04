import toast from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
      evt.preventDefault();
      const form = evt.target;
      const query = form.elements.query.value.trim();
  if (query !== '') {
      onSubmit(query); 
    } else {
      toast.error('Please enter a search query!');
    }
  }

  return (
  <header className={css.header}>
  <form onSubmit={handleSubmit} className={css.form}>
      <input
      className={css.inputSearch}
      type="text"
      name="query"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button className={css.formBtn} type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar
