module.exports = function(api) {
  let config = {
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
    plugins: [
      ['@babel/plugin-proposal-class-properties'],
    ]
  }
  api.cache.forever()
  return config
}
