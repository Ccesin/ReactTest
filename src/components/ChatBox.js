import React, { useEffect } from 'react';

const TawkToComponent = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/678a36a4825083258e06caab/1ihpuasog';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      {/* TawkTo Implementation */}
    </div>
  );
};
 
export default TawkToComponent;