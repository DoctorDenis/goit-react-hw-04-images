import styles from '../index.module.css';
import PropTypes from 'prop-types';

export function Error({ message }) {
  return (
    <>
      <h2 className={styles.Error}>{message}</h2>
    </>
  );
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
};
