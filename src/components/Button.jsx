import React from 'react';
import styles from '../index.module.css';
import PropTypes from 'prop-types';

export function Button({ onClick }) {
  return (
    <button className={styles.Button} type="button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
