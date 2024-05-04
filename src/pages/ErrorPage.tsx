import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import Footer from "../layout/Footer";
import Glitch from "../components/glitch";

const ErrorPage = () => {
  // const error = useRouteError();

  //p.s. add <meta name="robots" content="noindex"> to header

  let errorName = isRouteErrorResponse(useRouteError())
    ? 'Erreur 404: Page inexistante'
    : 'Erreur inattendue'

  return (
    <>
      <PageTitle noSiteName>{errorName}</PageTitle>

      <div className="bigdot">
        <div className="errortextbloc">

          <Glitch><h1>Oups...</h1>
            <h4>
              {errorName}
            </h4>
          </Glitch>

        </div>
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
