import {BuildOptions} from "../types/webpack-builder-types";
import {removeDataTestidBabelPlugin} from "./remove-data-testid-babel-plugin";

export const buildBabelLoader = (options: BuildOptions) => {
    const plugins = []

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    if (isProd) {
        plugins.push([removeDataTestidBabelPlugin, { props: ['data-testid']}])
    }


    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    ["@babel/preset-react", {
                        runtime: isDev ? 'automatic' : 'classic'
                    }]
                ],
                plugins: plugins.length ? plugins : undefined
            }
        }
    }
}