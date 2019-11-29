const path = require('path');

module.exports = {
  entry: './src/scripted.js',
  output: {
    filename: 'scripted_NEW.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production'
};
