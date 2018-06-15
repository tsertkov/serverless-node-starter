const slsw = require('serverless-webpack')

module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  devtool: 'source-map',
  externals: {
    'aws-sdk': 'aws-sdk'
  },
  module: {
    rules: [{
      test: /src\/.*\.js$/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}
