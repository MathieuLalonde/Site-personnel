import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './layout/routes'
import PageTitle from './components/PageTitle';
import './sass/main.scss'

const setFavicon = (iconPath: string) => {
  let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = iconPath;
};

setFavicon(import.meta.env.VITE_FAVICON);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageTitle description='Le site web de Mathieu Lalonde, developpeur web/logiciel et monteur télévisuel'></PageTitle>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
