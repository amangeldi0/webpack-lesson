import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "@/Router/Router";

const root: HTMLElement = document.getElementById('root')

if (!root) {
    throw new Error('Root not found')
}

const container = createRoot(root)

container.render(<RouterProvider router={router} />)

