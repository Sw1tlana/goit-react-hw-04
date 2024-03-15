import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import ImageModal from './components/ImageModal/ImageModal';
import css from './App.module.css';

import "modern-normalize";
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { requestPhotos, requestPhotosByQuery } from './services/api';

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => { 
    async function fetchFotos() {

      try {
        setIsLoading(true);
        setIsError(false);
        const data = await requestPhotos();
        setPhotos(data);

      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFotos()
  }, [])

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
        await requestPhotos(nextPage);
      setPhotos([...photos, ...newData]);
      setPage(nextPage); 
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.container}>
    <SearchBar onSubmit={onSearchQuery} /> 
    <Toaster />
    <ImageGallery photos={photos}/>
    {isLoading && <Loader/>} 
    {isError && <ErrorMessage/>}
    {photos && photos.length > 0 && <LoadMoreBtn onClick={loadMorePhotos}/>} 
     <ImageModal/>
    </div>
  )
}

export default App;
