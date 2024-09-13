import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const GoogleAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdsbyGoogle push error:", e);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6750010916802163"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6750010916802163"
        data-ad-slot="3163093922"
      ></ins>
    </div>
  );
};

export default GoogleAd;
