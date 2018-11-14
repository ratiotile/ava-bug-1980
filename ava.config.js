export default {
  files: ['src/**/test_*.js'],
  sources: ['src/**/*.js'],
  cache: true,
  color: true,
  compileEnhancements: true,
  require: ['@babel/register'],
  babel: {
    extensions: ['js'],
  },
  verbose: true,
}
