import React, { useState } from 'react';

const BottomNav = () => {
  const [showCharContainer, setShowCharContainer] = useState(false);
  const [showSwipeContainer, setShowSwipeContainer] = useState(true);

  const handleEnvelopeClick = () => {
    setShowCharContainer(true);
    setShowSwipeContainer(false);
  };

  return (
    <div className='bottomNav w-full h-14 sm:hidden absolute bottom-0 z-50 flex gap-2 items-center '>
      <div
        className="swipes w-1/2 bg-white h-full flex justify-center items-center text-2xl rounded-md"
        onClick={() => {
          setShowCharContainer(false);
          setShowSwipeContainer(true);
        }}
      >
        <i className="fa-solid fa-heart"></i>
      </div>
      <div
        className="chats w-1/2 bg-white h-full flex justify-center items-center text-2xl rounded-md"
        onClick={handleEnvelopeClick}
      >
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  );
};

export default BottomNav;
