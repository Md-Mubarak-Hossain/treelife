import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Trees from '../pages/Trees/Trees';
import Home from '../pages/Home/Home';
import Golmos from '../pages/Golmo/Golmos';
import Birots from '../pages/Birot/Birots';
import Register from '../account/Register';
import DetailsGolmo from '../pages/Golmo/DetailsGolmo';
import DetailsTree from '../pages/Trees/DetailsTree';
import DetailsBirot from '../pages/Birot/DetailsBirot';

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
                    path: "/tree/details",
                    element: <DetailsTree />
                }
                ,
                {
                    path: "/golmo",
                    element: <Golmos />
                },

                {
                    path: "/golmo/details",
                    element: <DetailsGolmo />
                }
                ,
                {
                    path: "/birot",
                    element: <Birots />

                },
                {
                    path: "/birot/details",
                    element: <DetailsBirot />
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