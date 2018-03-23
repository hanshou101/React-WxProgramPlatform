module.exports = {

    entry: "./src/App.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/dist",
    },
    devServer:{
        contentBase : "./public"
    },

    devtool: "source-map",

    resolve: {
        extensions: ['.ts', ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // 原有的针对  tsx，转化为jsx，再转化为js的操作
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            namedExport: true,
                            camelCase: true,
                            minimize: true,
                            localIdentName: "[path][name]_____[local]---[hash:base64:8]"
                        }
                    },
                ]
            },
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }

}