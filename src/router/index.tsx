import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children: [
            
        ]
    },
    {
        path:'/home',
        element:<Home/>,
        children: [
            
        ]
    }
])
export default router