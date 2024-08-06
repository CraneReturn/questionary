import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AdminHome from "../pages/admin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [

        ]
    },
    {
        path: '/admin',
        element: <AdminHome />,
        children: [

        ],
    },
])
export default router