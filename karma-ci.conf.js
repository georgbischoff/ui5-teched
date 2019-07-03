//Load the base configuration
var baseConfig = require("./karma.conf.js");

module.exports = function (config) {
  // Load base config
  baseConfig(config);
  // Override base config
  config.set({
    browsers: ["RemoteChrome"],
    hostname: "localhost",
    customLaunchers: {
      "RemoteChrome": {
        base: "WebDriver",
        flags: ['--no-sandbox'],
        config: {
          hostname: "172.31.0.2",
          port: 4444
        },
        browserName: "chrome",
        name: "karma",
        pseudoActivityInterval: 30000
      }
    }
  });
}
