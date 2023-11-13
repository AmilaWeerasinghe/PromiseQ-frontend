import React, { useState } from 'react';
import axios from 'axios';

const ObjectDetectionApp = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post('cloud function end point', formData);
      // Handle response or update UI as needed
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ObjectDetectionApp;
