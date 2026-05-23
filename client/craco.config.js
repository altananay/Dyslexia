module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Exclude node_modules from source-map-loader to prevent
      // UnhandledSchemeError with data: URIs in semantic-ui-css
      const sourceMapLoader = webpackConfig.module.rules.find(
        (r) => r.enforce === 'pre'
      );
      if (sourceMapLoader) {
        sourceMapLoader.exclude = /node_modules/;
      }
      return webpackConfig;
    },
  },
};
