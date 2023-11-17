import {createRoot} from "react-dom/client";
import {App} from "./config/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {ShopPage} from "@/pages/shop";
import {AboutPage} from "@/pages/about";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<div>Loading</div>}><AboutPage /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<div>Loading</div>}><ShopPage /></Suspense>
            }
        ]
    }
])



const root: HTMLElement = document.getElementById('root')

if (!root) {
    throw new Error('Root not found')
}

const container = createRoot(root)

container.render(<RouterProvider router={router} />)

