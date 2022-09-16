import Dictionary from 'pages/Dictionary/Dictionary'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from 'react-router-dom'

export const router = createBrowserRouter([
    
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/dictionary',
                element: <Dictionary />
            }
        ]
    },
])