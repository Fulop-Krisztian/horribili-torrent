import React, { useState } from 'react';
import './FileUpload.css'


function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  }

  async function handleUpload() {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error uploading file.');
    }
  }

  return (
    <div className='fileupload'>
      <p>Choose your torrent...</p>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default FileUpload;
