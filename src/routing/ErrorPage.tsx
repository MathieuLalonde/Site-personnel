import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Footer from "./Footer";
import './ErrorPage.css'


const ErrorPage = () => {
  // const error = useRouteError();

  //p.s. add <meta name="robots" content="noindex"> to header

  let errorName = isRouteErrorResponse(useRouteError())
    ? 'Erreur 404: Page non-existante'
    : 'Erreur inattendue'
  
  return (
    <>      
      <PageTitle noSiteName>{errorName}</PageTitle>

      <div className="bigdot">
        <div className="errortextbloc">

          <h1>Oups...</h1>
          <p>
            {errorName}
          </p>


        </div>
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
