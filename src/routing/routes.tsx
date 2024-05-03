import { createBrowserRouter } from "react-router-dom";

// Pages principales :
import BlogPage from "./BlogPage";
import BlogTemplatePage from "./BlogTemplatePage";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Montage from "./Montage"
// Travaux (portfolio):
import Cerveau from "./travaux/Cerveau";
import Portfolio from "./PortfolioPage";
import Respiration from "./travaux/Respiration";
import Satellite from "./travaux/Satellite";
import Vaisseau from "./travaux/Vaisseau";
// Autres pages :
import StyleGuide from "./StyleGuide";
import Multiplayer from "./travaux/Multiplayer";


const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <HomePage /> }, // or path: ''
      // { path: 'dev', element: <Developpeur /> },
      { path: 'montage', element: <Montage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogTemplatePage /> },
      { path: 'coordonnees', element: <ContactPage /> },

      { path: 'styleguide', element: <StyleGuide /> },
    ]
  },

  {
    path: 'portfolio',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Portfolio /> },
      { path: 'cerveau', element: <Cerveau /> },
      { path: 'relaxation', element: <Respiration /> },
      { path: 'satellite', element: <Satellite /> },
      { path: 'vaisseau', element: <Vaisseau /> },
      { path: 'multiplayer', element: <Multiplayer /> },      
    ]
  },


]);

export default router;