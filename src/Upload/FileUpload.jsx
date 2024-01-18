import React, { useState } from 'react';
import './FileUpload.css';

function FileUpload({ onFileChange }) {
  const [message, setMessage] = useState('');

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    onFileChange(selectedFile);
  }

  return (
    <div className="fileupload">
      <label className="choosefile">Choose your torrent... (must be .torrent file)</label>
      <input
        className="filepicker"
        type="file"
        accept=".torrent"
        onChange={handleFileChange}
      />
      {message && <p>{message}</p>}
    </div>
  );
}

export default FileUpload;
