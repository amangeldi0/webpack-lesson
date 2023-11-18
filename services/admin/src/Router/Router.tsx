import {App} from "@/app/App";
import {Suspense} from "react";
import {createBrowserRouter} from "react-router-dom";
import {AboutPage} from "@/pages/about";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/admin',
                element: <Suspense fallback={<div>Loading</div>}><AboutPage /></Suspense>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes;
