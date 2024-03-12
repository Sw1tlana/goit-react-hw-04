import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


const ImageGallery = ({ photos }) => {
  return (
    <div className={css.container}>
      <ul>{photos !== null && Array.isArray(photos) && photos.map((photo) => {
        return <li key={photo.id}>
           <ImageCard photo={photo}/>
        </li>
      })}</ul>
    </div>
  )
}

export default ImageGallery
