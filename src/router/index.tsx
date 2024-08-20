import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AdminHome from "../pages/admin";
import path from "path";
import Element from "antd/es/skeleton/Element";
import HomePageAdmin from "../layouts/admin/home/homepage";
import NotFound from "@/pages/notfound";
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
            {
                path: "home",
                element: <HomePageAdmin />
            }
        ],
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />,
    },
    {
        path: '404',
        element: <NotFound />,
    },
])

export default router