import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

// Pages principales :
import BlogPage from '../pages/BlogPage';
import BlogTemplatePage from '../pages/BlogTemplatePage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import Montage from '../pages/Montage';
import NotFoundPage from '../pages/NotFoundPage';
import Photo from '../pages/Photo';
import Portfolio from '../pages/PortfolioPage';
// Autres pages :
import StyleGuide from '../pages/StyleGuide';
// Travaux (portfolio):
import Cerveau from '../pages/travaux/Cerveau';
import Multiplayer from '../pages/travaux/Multiplayer';
import Relaxation from '../pages/travaux/Relaxation';
import Satellite from '../pages/travaux/Satellite';
import Vaisseau from '../pages/travaux/Vaisseau';
import Layout from './Layout';
import Splash from './Splash';

export const routes: RouteObject[] = [

  {
    path: '/',
    element: <Splash />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <HomePage /> }, // or path: ''
      // { path: 'dev', element: <Developpeur /> },
      { path: 'introduction', element: <HomePage /> },
      { path: 'montage', element: <Montage /> },
      { path: 'photo', element: <Photo /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogTemplatePage /> },
      { path: 'coordonnees', element: <ContactPage /> },

      { path: 'styleguide', element: <StyleGuide /> },

      { path: '404', element: <NotFoundPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },

  {
    path: 'webdev',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: 'cerveau', element: <Cerveau /> },
      { path: 'relaxation', element: <Relaxation /> },
      { path: 'satellite', element: <Satellite /> },
      { path: 'vaisseau', element: <Vaisseau /> },
      { path: 'multiplayer', element: <Multiplayer /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },

];

const router = createBrowserRouter(routes);

export default router;
