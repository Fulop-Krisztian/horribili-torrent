
import React, { useEffect } from 'react';
import './LowerPopup.css';

function LowerPopup({ message, color, show }) {
  useEffect(() => {
    const popupContainer = document.getElementById('lowerPopup');
    if (popupContainer && show) {
      setTimeout(() => {
        popupContainer.classList.add('show');
      }, 100);
    }
  }, [show]);

  return (
    <div id="lowerPopup" className={`lowerpopup ${show ? 'show' : ''}`} style={{ backgroundColor: color }}>
      <p>{message}</p>
    </div>
  );
}

export default LowerPopup;
