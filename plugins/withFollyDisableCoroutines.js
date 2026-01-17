const { withDangerousMod } = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

/**
 * Expo config plugin to fix the 'folly/coro/Coroutine.h' file not found error.
 * This adds FOLLY_CFG_NO_COROUTINES preprocessor definition to disable
 * Folly's coroutine support which requires C++20 features not always available.
 */
function withFollyDisableCoroutines(config) {
  return withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile"
      );

      let podfileContent = fs.readFileSync(podfilePath, "utf-8");

      // Check if we've already added our modifications
      if (podfileContent.includes("FOLLY_CFG_NO_COROUTINES")) {
        return config;
      }

      // Add post_install hook to disable Folly coroutines
      const postInstallHook = `
  # Fix for 'folly/coro/Coroutine.h' file not found error
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']
      config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'FOLLY_CFG_NO_COROUTINES=1'
    end
  end
`;

      // Find the post_install block and add our hook
      if (podfileContent.includes("post_install do |installer|")) {
        // Insert after the post_install opening
        podfileContent = podfileContent.replace(
          /post_install do \|installer\|/,
          `post_install do |installer|${postInstallHook}`
        );
      } else {
        // Add a new post_install block at the end
        podfileContent += `
post_install do |installer|
${postInstallHook}
end
`;
      }

      fs.writeFileSync(podfilePath, podfileContent);
      return config;
    },
  ]);
}

module.exports = withFollyDisableCoroutines;
