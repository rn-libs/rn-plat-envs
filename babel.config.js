module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    'dynamic-import-node-babel-7',
    ['@babel/plugin-transform-runtime', {
      regenerator: true,
      helpers: false,
    }],
  ],
}
