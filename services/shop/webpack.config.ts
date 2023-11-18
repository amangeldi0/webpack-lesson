import path from 'path'
import webpack from 'webpack'
import {buildWebpack, BuildMode, BuildPaths, BuildPlatform} from "@packages/build-config";
import PackageJson from './package.json'

interface EnvVariables  {
    mode?: BuildMode
    port?: number;
    analyzer?: boolean;
    platform?: BuildPlatform
}


module.exports = (env: EnvVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        public: path.resolve(__dirname, 'public')
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3001,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer ?? false,
        platform: env.platform ?? 'desktop'
    })

    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'shop',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/Router/Router.tsx'
        },
        shared: {
            ...PackageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: PackageJson.dependencies['react']
            },
            "react-router-dom": {
                eager: true,
                requiredVersion: PackageJson.dependencies['react-router-dom']
            },
            "react-dom": {
                eager: true,
                requiredVersion: PackageJson.dependencies['react-dom']
            }
        }
    }))

    return config;
}
