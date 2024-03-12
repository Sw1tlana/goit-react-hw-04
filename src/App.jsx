import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import ImageModal from './components/ImageModal/ImageModal';
import "modern-normalize";
import css from './App.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const ACCESS_KEY = "Y8OVY-DAIGWWhP7Nmp122SVKSdogm4qGsG1ERWLS_D0"

function App() {
   const [photos, setPhotos] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);

  useEffect(() => { 
    
      async function fetchData () {
      try {
        setIsLoading(true);   
        setIsError(false);    
        const { data } = await axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`);       
        setPhotos(data);
    } catch(error) {
      setIsError(true)
    } finally {
      setIsLoading(false); 
    }
    }
    fetchData();
  }, [])
 
  return (
    <div className={css.container}>
      <LoadMoreBtn/>
      <SearchBar/>
      <ImageGallery photos={photos}/>
      <Loader isLoading={isLoading}/>
      <ErrorMessage isError={isError}/>
      <ImageModal/>
    </div>
  )
}

export default App
