/*
 * This build will optimize CSS with standard. JS files will minified but not concatenated.
 * Files in the excludeShallow will be left out of the minified process.
 */
({
  appDir: "../",
  dir: "../../build-02",
  baseUrl: "js/",
	optimizeCss: 'standard'
})