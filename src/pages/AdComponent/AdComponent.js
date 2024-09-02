import React, { useEffect, useRef } from "react";

const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e.message);
      }
    }
  }, []);

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3940256099942544" // Test AdSense client ID
        data-ad-slot="1234567890"                // Test AdSense ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      ></ins>
    </div>
  );
};

export default AdComponent;
