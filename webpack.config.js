const WebpackBeforeBuildPlugin = require('before-build-webpack');
const { unlink, existsSync } = require('fs');

module.exports = {
  entry: './src/js/app.js',
  mode: 'production',
  output: {
    path: `${__dirname}/src/js`,
    filename: 'web3-app.js',
  },
  plugins: [
    new WebpackBeforeBuildPlugin(function (stats, callback) {
      const path = `${__dirname}/src/js/web3-app.js`
      if (existsSync(path)) {
        unlink(path, (err) => {
          if (err) throw err;
          console.log(`${path} was deleted`);

          callback();
        });
      } else {
        callback();
      }
    }),
  ]
};