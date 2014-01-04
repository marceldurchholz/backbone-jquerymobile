/*
 * This build will optimize CSS files only (standard.keepLines). JS files will be left as is.
 */
({
  appDir: "../",
  dir: "../../build-01",
  baseUrl: "js/",
  optimize: "none",
  paths: {
      "jquery": "empty:"
  }
})