import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Event from "../Pages/Event";
import EventDetails from "../Pages/EventDetails";

const myCreateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/event',
                element: <Event></Event>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/event/:id',
                element: <EventDetails></EventDetails>,
                loader: () => fetch('/services.json')
            }
        ]
    }
]);


export default myCreateRouter;