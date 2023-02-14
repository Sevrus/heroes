import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root.jsx';
import ErrorPage from './error-page';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Accueil from "./routes/Accueil.jsx";
import Personnage from "./routes/Personnage.jsx";
import Scenario from "./routes/Scenario.jsx";
import Contact from "./routes/Contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Accueil/>
            },
            {
                path: '/personnage',
                element: <Personnage/>
            },
            {
                path: '/scenario',
                element: <Scenario/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
