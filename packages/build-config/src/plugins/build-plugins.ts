import webpack, {type Configuration,  } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "../types/webpack-builder-types";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export const buildPlugins = (options: BuildOptions): Configuration['plugins'] => {

    const isDev = options.mode === 'development'
    const isProd = options.mode === 'production'

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({template:options.paths.html}),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        }),
        // new ForkTsCheckerWebpackPlugin()
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ReactRefreshPlugin())
    }

    if (options.analyzer) {
        plugins.push(new BundleAnalyzerPlugin())

    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))

        plugins.push(new CopyPlugin({
            patterns: [
                {from: path.resolve(options.paths.public, 'locales'), to: path.resolve(options.paths.output, 'locales')},
            ]
        }))
    }

    return plugins
}