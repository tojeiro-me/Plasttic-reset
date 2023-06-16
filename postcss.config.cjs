module.exports = {
    plugins: [
      require('postcss-preset-env')({ stage: 2 }),
      require('autoprefixer'),
      require('cssnano')({ preset: 'default' })
    ],
  };