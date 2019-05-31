require('@babel/register')({
  // These patterns are relative to the project directory (where the `package.json` file lives):
  ignore: [
    /node_modules/,
    /test_.*\.js/
  ],
  //sourceMaps: false
  plugins: [
    [
      'istanbul',
      {
        all: true,
        cache: true,
        exclude: ['**/test_*.js'],
        include: ['src/**/*.js'],
      },
    ],
  ],
});
