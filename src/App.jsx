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
import { requestPhoto, requestPhotoSearch } from './services/api';

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1); 

 const handleLoadMore = async () => { 
    try {
    setIsLoading(true);
    const data = await requestPhotoSearch(searchQuery, page + 1);
    setPhotos([...photos, ...data.results]);
    setPage(prevPage => prevPage + 1);
    } catch(error) {
      setIsError(true);
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {   
   async function fetchPhotos () {
     try {
      setIsLoading(true);   
       setIsError(false); 
        const data = await requestPhoto();
         setPhotos(data)

      } catch(error) {
        setIsError(true)

      } finally {
        setIsLoading(false); 
      }
    }      
        fetchPhotos();
    }, []);


    const onSearchQuery = (query) => {
      setSearchQuery(query);
      setPage(1);
    };


  useEffect(() => {  
    if(searchQuery === null) return;

    async function fetchPhotos() {
     try {
      setIsLoading(true);   
       setIsError(false); 
        const data = await requestPhotoSearch(searchQuery, page);
         setPhotos(data.results);           
         setPage(prevPage => prevPage + 1);

      } catch(error) {
        setIsError(true)

      } finally {
        setIsLoading(false); 
      }
    }      
        fetchPhotos();
    }, [searchQuery, page]);
  
 
  return (
    <div className={css.container}>
    <SearchBar onSubmit={onSearchQuery}/>
    <Toaster />
    <ImageGallery photos={photos} />
    {isLoading && <Loader/>}
    {isError && <ErrorMessage/>}
    {photos && photos.length > 0 && <LoadMoreBtn onClick={handleLoadMore}/>}
    <ImageModal/>
    </div>
  )
}

export default App;
