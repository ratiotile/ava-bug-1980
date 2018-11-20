export default {
  files: ['src/**/test_*.js'],
  sources: ['src/**/*.js'],
  cache: true,
  color: true,
  compileEnhancements: true,
  require: ['./babel_register_config.js'],
  verbose: true,
}
