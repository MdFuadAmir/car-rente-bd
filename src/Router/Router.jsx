import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <Home />
            },
            {
                path: '/cars',
                element: <Home />
            },
            {
                path: '/booking',
                element: <Home />
            }
        ]
    }
])

export default router