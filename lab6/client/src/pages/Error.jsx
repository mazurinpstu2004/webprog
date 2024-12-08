import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="error_left">
        <img src="./assets/img/illustration.svg" alt="error" />
      </div>
        <div className="error_right">
          <div id="circle">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          </div>
        </div>
      </div>
  );
};

export default ErrorPage;
