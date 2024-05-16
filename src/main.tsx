import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './layout/routes'
import PageTitle from './components/PageTitle';
import './sass/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PageTitle description='Le site web de Mathieu Lalonde, developpeur web/logiciel et monteur télévisuel'></PageTitle>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
