import AdSense, { Adsense } from '@ctrl/react-adsense';
import React, { useEffect } from 'react';
  // Make sure this points to your CSS file

const AdComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6750010916802163";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script when the component unmounts
    };
  }, []);

  return (
    <div className="ad-container">
      <Adsense
        client="ca-pub-6750010916802163"
        slot="3163093922"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
        adTest="true"
      />
    </div>
  );
};

export default AdComponent;
