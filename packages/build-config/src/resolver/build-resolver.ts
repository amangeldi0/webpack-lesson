import {type Configuration} from "webpack";
import {BuildOptions} from "../types/webpack-builder-types";

export const buildResolver = (options: BuildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}