import {type Configuration} from "webpack";
import {buildLoaders} from "./loaders/build-loaders";
import {buildDevServer} from "./dev-server/build-dev-server";
import {buildPlugins} from "./plugins/build-plugins";
import {buildResolver} from "./resolver/build-resolver";
import {BuildOptions} from "./types/webpack-builder-types";

export const buildWebpack = (options: BuildOptions): Configuration => {

    const isDev = options.mode === 'development'


    const config: Configuration = {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: "[name].[contenthash].js",
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolver(options),

        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }

    return config
}