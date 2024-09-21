import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const loader = setInterval(() => {
      setCurrentProgress((prevProgress) => {
        let newProgress = prevProgress + Math.random() * 10; // Smaller increment for smoother progress
        if (newProgress >= 100) {
          newProgress = 100;
          clearInterval(loader); // Stop the loader when progress reaches 100%
        }
        return newProgress;
      });
    }, 100); // Shorter interval for smoother updates

    return () => clearInterval(loader); // Cleanup on unmount
  }, []);

  return (
    <div
      className='h-1 bg-red-500 transition-all duration-200 absolute z-40 top-0'
      style={{ width: `${currentProgress}%` }}
    />
  );
};

export default Loader;
