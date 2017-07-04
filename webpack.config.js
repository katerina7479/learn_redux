var webpack = require('webpack')

if (process.env.NODE_ENV == 'dev') {
  require('dotenv').config();
}


//Plugins
var env_plugin = new webpack.DefinePlugin({
  'process.env': {
    'REACT_AP_OW_KEY': JSON.stringify(process.env.REACT_AP_OW_KEY)
  }
});

var provide_plugin = new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery'
});


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',
  },
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyle: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.jsx',
      PageOne: 'app/components/PageOne.jsx',
      PageTwo: 'app/components/PageTwo.jsx',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower-components|Makefile)/
    }]
  },
  plugins: [
    env_plugin,
    provide_plugin
  ],
  devtool: 'eval-source-map'
};
