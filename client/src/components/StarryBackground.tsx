import React, { useEffect } from 'react';

const StarryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

export default StarryBackground;