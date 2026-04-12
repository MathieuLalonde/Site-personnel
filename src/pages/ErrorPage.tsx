import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorScreen } from './ErrorScreen';

function ErrorPage() {
  const errorName = isRouteErrorResponse(useRouteError())
    ? 'Erreur 404: Page inexistante'
    : 'Erreur inattendue';

  return <ErrorScreen errorName={errorName} />;
}

export default ErrorPage;
