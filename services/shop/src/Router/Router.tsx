import {App} from "@/app/App";
import {Suspense} from "react";
import {ShopPage} from "@/pages/shop";
import {createBrowserRouter} from "react-router-dom";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={<div>Loading</div>}><ShopPage /></Suspense>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)

export default routes;
