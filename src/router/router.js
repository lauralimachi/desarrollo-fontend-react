import { createBrowserRouter, Navigate } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import LandingPage from "../screens/LandingPage/LandingPage";

import App from "../App";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-fontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Navigate to="/landingpage" replace /> },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/landingpage', 
                element: <LandingPage />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;