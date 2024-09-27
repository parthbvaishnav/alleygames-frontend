import React, { useEffect, useRef } from 'react';

const GoogleAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      adRef.current.innerHTML = "";
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display:"inline-block", width:200, height:800 }}
        data-ad-client="ca-pub-6750010916802163"
        data-ad-slot={"6802522234"}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
