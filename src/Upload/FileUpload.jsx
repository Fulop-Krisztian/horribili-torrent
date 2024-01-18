import React, { useState } from 'react';
import './FileUpload.css'


function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }


  return (
    <div className='fileupload'>
      <label className="choosefile">Choose your torrent...</label>
      <input className='filepicker' type="file" accept=".torrent" onChange={handleFileChange} />
      {message && <p>{message}</p>}
    </div>
  );
}

export default FileUpload;
