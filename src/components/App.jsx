import { useEffect, useState } from 'react';
import {
  Searchbar,
  ImageGallery,
  Modal,
  Button,
  Loader,
  filteredPropertiesArray,
} from '../helpers/exportMap';
import { fetchImages } from '../fetchImages';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('resting');
  const [modalOpened, setModalOpened] = useState(false);
  const [imageInfo, setImageInfo] = useState(null);

  useEffect(() => {
    fetchData(query, page);
    // eslint-disable-next-line
  }, [query, page]);

  useEffect(() => {
    if (page > 1) {
      const { height: cardHeight } = document
        .querySelector('.imageGallery')
        ?.lastElementChild.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  }, [images, page]);

  const fetchData = (query, page) => {
    if (query === '') {
      setStatus('resting');
      return;
    }
    setStatus('waiting');
    fetchImages(query, page)
      .then(async data => {
        const imagesArray = await filteredPropertiesArray(data.hits);
        if (imagesArray.length === 0) {
          setStatus('empty');
        } else {
          setImages([...images, ...imagesArray]);
          setStatus('ok');
        }
      })
      .catch(error => {
        setStatus('error');
      });
  };

  const submitHandler = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const openModal = event => {
    const { url, tags } = event.target.dataset;
    setImageInfo({ url, tags });
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };

  const incrementPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={submitHandler} />
      {status === 'empty' && (
        <h2>
          Sorry! No images found on <i>{query}</i> query
        </h2>
      )}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onClick={openModal} />
          <Button onClick={incrementPage} />
        </>
      )}
      {status === 'waiting' && <Loader />}

      {modalOpened && (
        <Modal imageInfo={imageInfo} modalCloseMethod={closeModal} />
      )}
    </>
  );
}

export default App;
