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
import { requestPhoto } from './services/api';

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);

  const onSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const onPerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
  }


  useEffect(() => { 
    
    async function fetchPhoto() {
     try {
      setIsLoading(true);   
       setIsError(false); 
        const data = await requestPhoto(searchQuery, page, perPage);
         setPhotos(data);
        console.log(data)
      } catch(error) {
        setIsError(true)

      } finally {
        setIsLoading(false); 
      }
      }
        fetchPhoto();
    }, [searchQuery, page, perPage]);
 
  return (
    <div className={css.container}>
    <SearchBar onSubmit={onSearchQuery} onPerPageChange={onPerPageChange} currentPerPage={perPage}/>
    <Toaster />
    <ImageGallery photos={photos} />
    {isLoading && <Loader/>}
    {isError && <ErrorMessage/>}
    <LoadMoreBtn/>
    <ImageModal/>
    </div>
  )
}

export default App
