import css from './ImageCard.module.css';

const ImageCard = ({ photo, onClick }) => {
   const handleClick = () => {
    onClick(photo);
  };
  return (
    <div className={css.cardContainer}>
      <img className={css.card} src={photo.urls.small} alt={photo.alt_description} width={250} onClick={handleClick} />
        <h2 className={css.cardTitle}>{photo.user.name}</h2>
        <p className={css.cardLikes}>Likes: <strong>{photo.likes}</strong></p>
    </div>
  )
}

export default ImageCard
