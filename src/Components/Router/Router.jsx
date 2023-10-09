import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Event from "../Pages/Event";
import EventDetails from "../Pages/EventDetails";
import Login from "../Pages/UserLogin/login";
import Register from "../Pages/UserLogin/Register";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";

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
                path: '/services',
                element: <Event></Event>,
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
                path: '/dashboard',
                element: <PrivateRouter><Dashboard></Dashboard></PrivateRouter>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);


export default myCreateRouter;