import { ErrorScreen } from './ErrorScreen';

/** Explicit /404 and client-side “not found” (e.g. unknown blog slug). */
function NotFoundPage() {
  return (
    <ErrorScreen
      errorName="Erreur 404: Page inexistante"
      showFooter={false}
    />
  );
}

export default NotFoundPage;
