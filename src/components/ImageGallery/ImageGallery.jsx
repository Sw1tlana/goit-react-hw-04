import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


const ImageGallery = () => {
  return (
    <div className={css.container}>
     <ImageCard/>
    </div>
  )
}

export default ImageGallery
