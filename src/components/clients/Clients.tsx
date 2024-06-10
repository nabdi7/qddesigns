// Clients.tsx
import React from 'react';
import Image from 'next/image';
const Clients = () => {
  return (
    <div>
      <h2>Clients</h2>
      <p>Our work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients — big or small.</p>
      <div className="overflow-hidden">
        <div className="flex animate-slide-from-right">
          <Image src="/logo.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/brightsmiles.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/almaas-transparent.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/emoti.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/hadiya-transparent.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/looo11.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/images.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 
          <Image src="/lovingcare-logo-transparent.png" alt="Client Logo" className="mr-4" width={100} height={100} /> 

        </div>
      </div>
    </div>
  );
}

export default Clients;
