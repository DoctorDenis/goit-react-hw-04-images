import styles from '../index.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  image: { webformatURL, largeImageURL, tags },
  onClick,
}) {
  console.log(tags);
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={onClick}
        data-url={largeImageURL}
        data-tags={tags}
        className={styles.ImageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};
