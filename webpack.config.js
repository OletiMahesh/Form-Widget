const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'docs'),
        libraryTarget: 'umd',
        library: 'form-widget'
    },
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: [
        {
            loader: "html-loader"
        }
        ]
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        {
            loader: 'url-loader'
        }]
      }
    ]
  },
}