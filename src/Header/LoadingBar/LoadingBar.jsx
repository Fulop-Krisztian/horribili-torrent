import React, { useEffect, useState } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import './LoadingBar.css'; // Create a CSS file for styling

const LoadingBar = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unlisten = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 200); // You can adjust the duration as needed
    };

    unlisten(); // Trigger the loading bar on the initial render

    const cleanup = () => {
      // Clean up any resources here if needed
    };

    return cleanup;
  }, [location]);

  return (
    <>
      <div className={`loading-bar ${isLoading ? 'loading' : ''}`} />
    </>
  );
};

export default LoadingBar;
