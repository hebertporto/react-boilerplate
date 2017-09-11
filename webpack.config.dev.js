module.exports = {
  devServer: {
    // All options here: https://webpack.js.org/configuration/dev-server/

    // enable HMR on the server
    hot: true,
    // match the output path
    contentBase: resolve(__dirname, '../dist'),
    // match the output `publicPath`
    publicPath: '/',

    // Enable to integrate with Docker
    //host:"0.0.0.0",

    port: 3000,
    historyApiFallback: true,
    // All the stats options here: https://webpack.js.org/configuration/stats/
    stats: {
        colors: true, // color is life
        chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
        'errors-only': true
    }
  },
}
