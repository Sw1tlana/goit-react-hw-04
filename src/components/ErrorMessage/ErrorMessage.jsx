import css from './ErrorMessage.module.css';

const ErrorMessage = ({ isError }) => {
  return (
    <div className={css.container}>
     {isError && <p>Whoops, something went wrong! Please try reloading this page!</p>}
    </div>
  )
}

export default ErrorMessage
