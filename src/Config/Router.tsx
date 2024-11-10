import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../Views/Dashboard';
import Detail from '../Views/Detail';
import Login from '../Views/Login'; // Import Login component
import SignUp from '../Views/SignUp';

const router = createBrowserRouter([
    {
        path: "/Login", // Adjust path to lowercase 'login' as per convention
        element: <Login />,
    },
    {
        path: "/SignUp", // Adjust path to lowercase 'login' as per convention
        element: <SignUp />,
    },
    {
        path: '/',
        element: <Dashboard />,
    },
    {
        path: '/detail/:id', 
        element: <Detail />,
    },
]);

const Router: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default Router;
