const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/components/index.js',
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'mobile-bundle.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      //   {
      //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //     }
      //   },
      //   {
      //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: utils.assetsPath('media/[name].[hash:7].[ext]')
      //     }
      //   },
      //   {
      //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      //     }
      //   }
    ]
  },
}
