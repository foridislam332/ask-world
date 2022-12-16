import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../layout/Dashboard/Dashboard';
import Main from '../layout/Main/Main';
import AddContent from '../pages/Dashboard/AddContent';
import ContentList from '../pages/Dashboard/ContentList';
import Home from '../pages/Main/Home';
import ReadingHistory from '../pages/Main/ReadingHistory';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/reading-history",
                element: <ReadingHistory />
            },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <ContentList />,
            },
            {
                path: "/dashboard",
                element: <AddContent />,
            }
        ],
    },
])

export default routes;