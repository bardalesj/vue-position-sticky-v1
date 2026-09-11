module.exports = {
  presets: [
    // Ship the lib without core-js polyfills: some inject module-level
    // `document` access that crashes SSR on import. The host app polyfills.
    ['@vue/app', { useBuiltIns: false }]
  ]
}
