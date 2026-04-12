import Glitch from '../components/glitch';
import PageTitle from '../components/PageTitle';
import Footer from '../layout/Footer';

interface ErrorScreenProps {
  errorName: string
  /** When false, omit bottom footer (e.g. main layout already renders one). */
  showFooter?: boolean
}

export function ErrorScreen({ errorName, showFooter = true }: ErrorScreenProps) {
  return (
    <>
      <PageTitle noSiteName>{errorName}</PageTitle>

      <div className="bigdot">
        <div className="errortextbloc">

          <Glitch>
            <h1>Oups...</h1>
            <h4>{errorName}</h4>
          </Glitch>
        </div>

        <div style={{ height: '100%' }} />
        {showFooter ? <Footer /> : null}
      </div>
    </>
  );
}
