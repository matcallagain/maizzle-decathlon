/** @type {import('@maizzle/framework').Config} */

/*
|-------------------------------------------------------------------------------
| Production config                       https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is where you define settings that optimize your emails for production.
| These will be merged on top of the base config.js, so you only need to
| specify the options that are changing.
|
*/

module.exports = {
  build: {
    templates: [
      {
        destination: {
          path: 'build_production',
        },
      },
    ],
    components: {
      // remove the `id` attribute from all elements in components
      blacklistAttributes: ['id'],
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
  shorthandCSS: true,
  prettify: false,
  minify: false
}
