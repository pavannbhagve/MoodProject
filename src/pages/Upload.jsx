import React, { useState } from 'react';

function Upload() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    // Handle the upload logic (e.g., send image to server)
    alert('Image uploaded successfully');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Moon Image</h1>
      
      {/* File input for selecting image */}
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 border rounded p-2"
      />
      
      {/* Display the uploaded image */}
      {image && (
        <div className="my-4 max-w-xs mx-auto">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-full h-auto max-h-64 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Upload button */}
      <button 
        onClick={handleUpload} 
        className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Upload
      </button>
    </div>
  );
}

export default Upload;
