"use client"
import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.livechatai.com/embed.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-id', 'cllnj46pb0001ma0f9o3yupav');
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    
    <div>
      {/* Your component's content */}
    </div>
  );
};

export default Chatbot