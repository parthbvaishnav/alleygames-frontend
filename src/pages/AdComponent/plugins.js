import adsConfig from "./adsConfig";

export default [
    {
      refreshInterstitialSlot() {
        console.log("refreshInterstitialSlot");
        // Logic to load and display interstitial ad
        window.googletag.pubads().display(adsConfig.interstitialSlot.path);
      },
      setupGpt() {
        console.log("setupGpt");
        // Setup GPT (Google Publisher Tag)
        window.googletag.cmd.push(() => {
          window.googletag.pubads().enableSingleRequest();
          window.googletag.enableServices();
        });
      }
    }
  ];
  