import { createBrowserRouter } from "react-router-dom"
import { HomePage } from "../../pages/Home/HomePage"
import { NotFoundPage } from "../../pages/NotFound/NotFoundPage"
import { ErrorPage } from "../../pages/Error/ErrorPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
])