module.exports = {
  presets: [
    [
      '@vue/app', 
      {
        polyfills: [
          'es6.promise',
          'es7.promise.finally',
          'es6.array.iterator',
        ]
      }
    ]
  ]
}
