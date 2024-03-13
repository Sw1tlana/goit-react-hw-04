import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import ImageModal from './components/ImageModal/ImageModal';
import "modern-normalize";
import css from './App.module.css';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { requestPhoto } from './services/api';

function App() {
   const [photos, setPhotos] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
   const notify = () => toast('Here is your toast.');

  const onSearchQuery = (query) => {
    setSearchQuery(query);
  }

  useEffect(() => { 
    
      async function fetchData () {

      try {
        setIsLoading(true);   
        setIsError(false);    
        const data = await requestPhoto(searchQuery);
        setPhotos(data);
        console.log(data);
         
    } catch(error) {
      setIsError(true)

    } finally {
      setIsLoading(false); 
    }
    }

    if (searchQuery !== '') {
      fetchData();
    } else {
      notify();
    }
  }, [searchQuery]);
 
  return (
    <div className={css.container}>
    <SearchBar onSubmit={onSearchQuery}/>
    <ImageGallery photos={photos}/>
    {isLoading && <Loader/>}
    {isError && <ErrorMessage/>}
    <LoadMoreBtn/>
    <ImageModal/>
    </div>
  )
}

export default App
