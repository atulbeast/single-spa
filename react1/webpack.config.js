const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "atul",
    projectName: "react1",
    webpackConfigEnv,
    argv,
    outputSystemJS: true,
  });

  return merge(defaultConfig, {
    optimization: {
      usedExports: true,
      minimize: true
    }
    // modify the webpack config however you'd like to by adding to this object
  });
};
