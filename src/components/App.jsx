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
    setStatus('waiting');
    fetchImages(query, page)
      .then(data => {
        const imagesArray = filteredPropertiesArray(data.hits);
        setImages([...images, ...imagesArray]);
        setStatus('ok');
      })
      .catch(error => {
        setStatus('error');
      });
    // eslint-disable-next-line
  }, [query, page]);

  const submitHandler = event => {
    event.preventDefault();
    const query = event.target.elements.query.value;
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
