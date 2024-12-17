import React, { useState } from 'react';

const Upload = () => {
  const [image, setImage] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file); // Store the selected file
  };

  // Handle file upload
  const handleUpload = () => {
    if (!image) {
      alert('Please choose a file before uploading.');
      return; // Prevent upload if no file is selected
    }

    // Proceed with uploading the image (this can be an API call to the backend)
    console.log('Uploading image:', image);
    // Add your image upload logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/digital-art-moon-wallpaper_23-2150918871.jpg')` }}>
      <div className="bg-transparent p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-80">Upload Your Moon Image</h2>

        {/* File input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-70 mb-2">Choose a Moon Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Display selected file name if any */}
        {image && (
          <div className="mb-4">
            <p className="text-sm text-gray-600">Selected Image: {image.name}</p>
          </div>
        )}

        {/* Upload button */}
        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;
