import { createBrowserRouter } from "react-router-dom";

// Pages principales :
import BlogPage from "../pages/BlogPage";
import BlogTemplatePage from "../pages/BlogTemplatePage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
import Montage from "../pages/Montage"
// Travaux (portfolio):
import Cerveau from "../pages/travaux/Cerveau";
import Portfolio from "../pages/PortfolioPage";
import Respiration from "../pages/travaux/Respiration";
import Satellite from "../pages/travaux/Satellite";
import Vaisseau from "../pages/travaux/Vaisseau";
// Autres pages :
import StyleGuide from "../pages/StyleGuide";
import Multiplayer from "../pages/travaux/Multiplayer";


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