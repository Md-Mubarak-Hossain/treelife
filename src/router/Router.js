import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Trees from '../pages/Trees/Trees';
import Home from '../pages/Home/Home';
import Golmos from '../pages/Golmo/Golmos';
import Birots from '../pages/Birot/Birots';
import Register from '../account/Register';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/tree",
                    element: <Trees />,
                },
                {
                    path: "/golmo",
                    element: <Golmos />,
                },
                {
                    path: "/birot",
                    element: <Birots />,
                },
                {
                    path: "/register",
                    element: <Register />,
                }
            ]
        },
        {
            path: '/*',
            element: <div>404</div>
        }
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default Router;