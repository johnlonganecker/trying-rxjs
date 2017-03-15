const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //module: {
    //rule: [
      //{test: /\.(js|jsx)$/, use: 'babel-loader'} 
    //]
  //},
  //plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    //new HtmlWebpackPlugin({template: './src/index.html'})
  //]
}
