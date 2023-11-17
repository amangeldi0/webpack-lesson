import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense} from "react";
import {AboutLazy} from "@/Pages/AboutLazy";
import {ShopLazy} from "./Pages/ShopLazy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={<div>Loading</div>}><AboutLazy /></Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={<div>Loading</div>}><ShopLazy /></Suspense>
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

