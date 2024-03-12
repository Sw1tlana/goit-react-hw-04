import css from './ImageCard.module.css';

const ImageCard = ({ photo }) => {
  return (
    <div className={css.container}>
    <img src={photo.urls.small} alt={photo.alt_description} width={250}/>
    <p>{photo.user.name}</p>
    <p>Likes: {photo.likes}</p>
  </div>
  )
}

export default ImageCard
