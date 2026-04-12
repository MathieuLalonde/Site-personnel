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

      <div className="flex flex-col 
         bg-[url('@/assets/dot.svg')] bg-no-repeat bg-left-top 
         bg-[length:160%] bg-[position:-20%_6rem]
         w-screen h-screen
         left-[20%] top-24">
        <div className="errortextbloc">

          <Glitch><h1>Oups...</h1>
            <h4>
              {errorName}
            </h4>
          </Glitch>
        </div>

        <div style={{ height: '100%' }} />
        <Footer />
      </div>
    </>
  );
};

export default ErrorPage;
