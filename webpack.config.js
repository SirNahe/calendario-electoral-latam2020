const path = require('path')

module.exports = {
  entry: './front/index.js',
  output: {
    path: path.resolve(__dirname, 'src/assets/javascripts/'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
