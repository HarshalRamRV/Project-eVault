import React from 'react';
import './ImagePopup.css'; // Import the updated styles

const ImagePopup = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className="imagePopup-modalBackground" onClick={onClose}>
      <div className="imagePopup-modalContainer" onClick={(e) => e.stopPropagation()}>
        <div className="modalContent">
          <img src={imageSrc} alt="popup" className="imagePopup-modalImage" />
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
