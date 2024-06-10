/** @type {import('@maizzle/framework').Config} */

/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| The exported object contains the default Maizzle settings for development.
| This is used when you run `maizzle build` or `maizzle serve` and it has
| the fastest build time, since most transformations are disabled.
|
*/

module.exports = {
  locals: {
    emailMaxWidth: "636px",
    signature: "<p>À bientôt !</p><p>L’équipe Decathlon</p>",
  },
  build: {
    tailwind: {
      css: "src/css/tailwind.css",
      config: "tailwind.config.decathlon.js",
    },
    templates: [
      {
        source: "src/templates",
        destination: {
          path: "build_local",
        },
        assets: {
          source: "src/images",
          destination: "images",
        },
      },
    ],
    browsersync: {
      directory: false,
      open: true,
      notify: false,
    },
  },
  shorthandCSS: true,
  inlineCSS: {
    attributeToStyle: true,
  },
};
