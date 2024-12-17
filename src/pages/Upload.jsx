import { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement file upload logic here (e.g., send to a backend server)
    alert('File uploaded successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Your Moonshot</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-6">
          <label htmlFor="file" className="block text-gray-400 mb-2">
            Select an image of the Moon:
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          />
        </div>
        {selectedFile && (
          <div className="mb-6">
            <p className="text-gray-400 mb-2">Preview:</p>
            <img
              src={selectedFile}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
