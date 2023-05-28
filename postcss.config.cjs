module.exports = {
    plugins: [
      require('postcss-preset-env')({ stage: 2 }),
      require('autoprefixer'),
      require('postcss-discard-empty'),
      require('cssnano')
    ],
  };