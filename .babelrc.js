module.exports = function(api) {
  let config = {
    sourceMaps: 'inline',
    presets: [
      '@babel/preset-flow',
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          modules: 'commonjs',
        },
      ],
    ],
  }
  api.cache.forever()
  return config
}
