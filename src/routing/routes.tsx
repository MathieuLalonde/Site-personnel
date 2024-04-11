import { createBrowserRouter } from "react-router-dom";

import BlogPage from "./BlogPage";
import BlogTemplatePage from "./BlogTemplatePage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import Montage from "./Montage"
import Developpeur from "./Developpeur";


const router = createBrowserRouter([
    // { index: true, element: <HomePage /> }, // or path: ''
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'dev', element: <Developpeur /> },
            { path: 'montage', element: <Montage /> },
            { path: 'blog', element: <BlogPage />}, 
            { path: 'blog/:id', element: <BlogTemplatePage /> },
        ]
    },


    

    // { path: '/contact', element: <ContactPage /> },
]);

export default router;