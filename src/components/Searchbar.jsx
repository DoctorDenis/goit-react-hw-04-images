import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../index.module.css';
// import { useCallback } from 'react';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    onSubmit(event.target.elements.query.value);
  };

  // console.log('Query - ', query);

  return (
    <header className={styles.Searchbar}>
      <form
        className={styles.SearchForm}
        onSubmit={event => submitHandler(event)}
      >
        <button type="submit" className={styles.SearchForm_button}>
          <span className={styles.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={styles.SearchForm_input}
          value={query}
          name="query"
          onChange={event => setQuery(event.target.value)}
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
