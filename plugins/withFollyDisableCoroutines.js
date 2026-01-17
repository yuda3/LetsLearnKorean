const { withDangerousMod, withXcodeProject } = require("@expo/config-plugins");
const fs = require("fs");
const path = require("path");

/**
 * Expo config plugin to fix the 'folly/coro/Coroutine.h' file not found error.
 * This adds preprocessor definitions to disable Folly's coroutine support
 * which requires C++20 features not always available in the build environment.
 */
function withFollyDisableCoroutines(config) {
  // First, modify the Podfile
  config = withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile"
      );

      if (!fs.existsSync(podfilePath)) {
        console.log("[withFollyDisableCoroutines] Podfile not found, skipping Podfile modification");
        return config;
      }

      let podfileContent = fs.readFileSync(podfilePath, "utf-8");

      // Check if we've already added our modifications
      if (podfileContent.includes("FOLLY_CFG_NO_COROUTINES")) {
        console.log("[withFollyDisableCoroutines] Modifications already present");
        return config;
      }

      // The post_install hook content to add
      const follyFixCode = `
    # Fix for 'folly/coro/Coroutine.h' file not found error
    installer.pods_project.targets.each do |target|
      target.build_configurations.each do |config|
        # Add Folly-related preprocessor definitions
        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= ['$(inherited)']
        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'FOLLY_CFG_NO_COROUTINES=1'
        config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] << 'FOLLY_HAVE_CLOCK_GETTIME=1'

        # Ensure C++17 standard is used
        config.build_settings['CLANG_CXX_LANGUAGE_STANDARD'] = 'c++17'
      end
    end
`;

      // Look for existing post_install block
      const postInstallMatch = podfileContent.match(/post_install\s+do\s+\|installer\|/);

      if (postInstallMatch) {
        // Insert our code after the post_install opening
        podfileContent = podfileContent.replace(
          /post_install\s+do\s+\|installer\|/,
          `post_install do |installer|${follyFixCode}`
        );
      } else {
        // Look for the end of the file to add post_install block
        podfileContent += `

post_install do |installer|
${follyFixCode}
end
`;
      }

      fs.writeFileSync(podfilePath, podfileContent);
      console.log("[withFollyDisableCoroutines] Podfile modified successfully");
      return config;
    },
  ]);

  return config;
}

module.exports = withFollyDisableCoroutines;
