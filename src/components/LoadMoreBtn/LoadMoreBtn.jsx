import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.containerLoadMore}>
    <button className={css.loadMoreBtn} type="button" onClick={onClick}>Load more</button>
  </div>
  )
}

export default LoadMoreBtn
