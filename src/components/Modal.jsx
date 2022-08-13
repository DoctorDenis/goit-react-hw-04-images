import { useEffect } from 'react';
import styles from '../index.module.css';
import PropTypes from 'prop-types';

export function Modal({ imageInfo: { url, tags }, modalCloseMethod }) {
  const closeModal = event => event.code === 'Escape' && modalCloseMethod();

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  });

  return (
    <div
      className={styles.Overlay + ' overlay'}
      onClick={event =>
        event.target.classList.contains('overlay') && modalCloseMethod()
      }
    >
      <div className={styles.Modal}>
        <span onClick={() => modalCloseMethod()} className={styles.close_btn}>
          +
        </span>
        <img src={url} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageInfo: PropTypes.shape({
    url: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  modalCloseMethod: PropTypes.func.isRequired,
};
