import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {BuildOptions} from "../types/webpack-builder-types";


export const  buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        hot: true,
    }
}

