import React from 'react';

export default function Root({children}) {
  React.useEffect(() => {
    // SiteGPT inline embed code
    window.$sitegpt = [];
    const script = document.createElement('script');
    script.src = 'https://sitegpt.ai/widget/f82077e8-6b28-4e5e-b096-9f93a0802871.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <>{children}</>;
}
