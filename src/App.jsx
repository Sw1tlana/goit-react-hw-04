import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import ImageModal from './components/ImageModal/ImageModal';
import "modern-normalize";
import css from './App.module.css';

import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { requestPhotosByQuery } from './services/api';

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImageUrl, setModalImageUrl] = useState(null);

 const onSearchQuery = (query) => {
   setSearchQuery(query);
   setPage(1);
 };

  useEffect(() => {
    if (searchQuery === null) return;   
    async function fetchFotosByQuery() {
        try {
        setIsLoading(true);
        setIsError(false);
        const data = await requestPhotosByQuery(searchQuery);
        setPhotos(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFotosByQuery();
  }, [searchQuery]);

    const loadMorePhotos = async () => {
    try {
      setIsLoading(true);
      const nextPage = page + 1; 
      const newData = searchQuery ?
        await requestPhotosByQuery(searchQuery, nextPage) :
        await requestPhotosByQuery(nextPage);
        setPhotos(prevPhotos => [...prevPhotos, ...newData]); 
      setPage(nextPage); 
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
 
  const openModalWithImage = (imageUrl) => {
    setModalImageUrl(imageUrl); 
  };

  const closeModal = () => {
    setModalImageUrl(null); 
  };

  return (
    <div className={css.container}>
    <SearchBar onSubmit={onSearchQuery} /> 
    <Toaster />
    <ImageGallery photos={photos} onImageClick={openModalWithImage}/>
    {isLoading && <Loader/>} 
    {isError && <ErrorMessage/>}
    {photos && photos.length > 0 && <LoadMoreBtn onClick={loadMorePhotos}/>} 
    {modalImageUrl && <ImageModal imageUrl={modalImageUrl} closeModal={closeModal} />}
    </div>
  )
}

export default App;
