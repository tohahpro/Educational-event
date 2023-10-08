import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Event from "../Pages/Event";
import EventDetails from "../Pages/EventDetails";
import Login from "../Pages/UserLogin/login";
import Register from "../Pages/UserLogin/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";

const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/event',
                element: <PrivateRouter><Event></Event></PrivateRouter>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/eventDetails/:id',
                element: <PrivateRouter><EventDetails></EventDetails></PrivateRouter>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);


export default myCreateRouter;