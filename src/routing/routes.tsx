import { createBrowserRouter } from "react-router-dom";

import BlogPage from "./BlogPage";
import BlogTemplatePage from "./BlogTemplatePage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Montage from "./Montage"
import Developpeur from "./Developpeur";
import StyleGuide from "./StyleGuide";
import Satellite from "./travaux/Satellite";
import Respiration from "./travaux/Respiration";
import Vaisseau from "./travaux/Vaisseau";
import Cerveau from "./travaux/Cerveau";
import Portfolio from "./PortfolioPage";


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
      { path: 'dev', element: <Developpeur /> },
      { path: 'montage', element: <Montage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'blog/:id', element: <BlogTemplatePage /> },
      // { path: '/contact', element: <ContactPage /> },

      { path: 'styleguide', element: <StyleGuide /> },

      {
        path: 'portfolio',
        element: <Portfolio />,
        children: [
          { index: true, element: <Vaisseau /> }, // or path: ''
          { path: 'cerveau', element: <Cerveau /> },
          { path: 'relaxation', element: <Respiration /> },
          { path: 'satellite', element: <Satellite /> },
          { path: 'vaisseau', element: <Vaisseau /> },
        ]
      },


    ]
  },




]);

export default router;