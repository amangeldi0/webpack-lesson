import type {ModuleOptions} from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypescript from "react-refresh-typescript";
import {BuildOptions} from "../types/webpack-builder-types";
import {buildBabelLoader} from "../babel/build-babel-loader";

export const buildLoaders = (options: BuildOptions): ModuleOptions['rules'] => {

    const isDev = options.mode === 'development'


    const svgrLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoLoader : {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true
                            }
                        }
                    ]
                }
            }
        }],
    }


    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }


    const cssLoaderWithModule = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path]_[name]__[local]' : '[hash:base64:8]'
            },
        }
    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS

            cssLoaderWithModule,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypescript()].filter(Boolean)
                    })
                }
            }
        ],
        exclude: /node_modules/,
    }

    const babelLoader = buildBabelLoader(options)


    return [assetLoader, scssLoader, tsLoader, svgrLoader   ]
}