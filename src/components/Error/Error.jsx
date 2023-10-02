import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
    const navigetor = useNavigate();
    const error = useRouteError();
    return (
        <div id="error-page" className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p className="text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
        <button onClick={() =>navigetor(-1)} className="btn btn-error">Go Back</button>
      </div>
    );
};

export default Error;