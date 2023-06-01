import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Trees from '../pages/Trees/Trees';
import Home from '../pages/Home/Home';

const Router = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Main/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },
                {
                    path:"/tree",
                    element:<Trees/>,
                },
                {
                    path:"/golmo",
                    element:<Trees/>,
                },
                {
                    path:"/birot",
                    element:<Trees/>,
                }
            ]

        },
        {
            path:'/*',
            element:<div>404</div>
        }
        
    ])
    return (
        <RouterProvider router={router} />
    );
};

export default Router;