import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.module.css';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const changeHandler = event => {
    setQuery(event.target.value);
  };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          value={query}
          name="query"
          onChange={changeHandler}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
