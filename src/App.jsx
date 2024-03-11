import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from "./components/ErrorMessage/ErrorMessage"; 
import ImageModal from './components/ImageModal/ImageModal';
import "modern-normalize";
import css from './App.module.css';

function App() {
 
  return (
    <div className={css.container}>
      <LoadMoreBtn/>
      <SearchBar/>
      <ImageGallery/>
      <Loader/>
      <ErrorMessage/>
      <ImageModal/>
    </div>
  )
}

export default App
