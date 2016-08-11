var path = require("path");
var webpack = require("webpack");

var assetsPath = path.join(__dirname, ".");
var publicPath = "/static/";

var commonLoaders = [
  {
    test: /\.js$/,
    loader: 'babel-loader',
    query: {
      "presets": ["es2015", "react", "stage-0"],
      "plugins": [
        "transform-decorators-legacy"
      ]
    },
    include: path.join(__dirname, 'src'),
    exclude: path.join(__dirname, 'node_modules')
  },
  {
    test: /\.json$/, loader: "json-loader"
  },
];

module.exports = [
  {
    name: "browser",
    devtool: "source-map",
    context: path.join(__dirname, "."),
    entry: [
      './src/client/index.js'
    ],
    output: {
      path: assetsPath,
      filename: "./public/static/bundle.js",
      publicPath: publicPath
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '.')],
      extensions: ['', '.js']
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        'process.env.BROWSER': 'true',
      })
    ]
  },
  {
    name: "nodejs",
    context: path.join(__dirname, "."),
    entry: {
      server: "./src/server/server.js"
    },
    target: "node",
    output: {
      path: assetsPath,
      filename: "./build/server.js",
      publicPath: publicPath,
      libraryTarget: "commonjs2"
    },
    module: {
      loaders: commonLoaders
    },
    resolve: {
      root: [path.join(__dirname, '.')],
      extensions: ['', '.js']
    },
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.DefinePlugin({
        __DEVCLIENT__: false,
        __DEVSERVER__: false,
        'process.env.NODE_ENV': '"production"',
        'process.env.BROWSER': 'false',
      })
    ]
  }
];