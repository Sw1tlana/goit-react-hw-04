import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <div>
      <ul className={css.listPhotos}>{photos !== null && Array.isArray(photos) && photos.map((photo) => {
        return <li className={css.listItemPhoto} key={photo.id}  onClick={() => onImageClick(photo.urls.small)}>
          <ImageCard photo={photo} onClick={onImageClick} />
        </li>
      })}</ul>
    </div>
  )
}

export default ImageGallery
