function Gallery() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Moonshot Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Placeholder images */}
          <div className="bg-gray-700 h-48 rounded-lg"></div>
          <div className="bg-gray-700 h-48 rounded-lg"></div>
          <div className="bg-gray-700 h-48 rounded-lg"></div>
        </div>
      </div>
    );
  }
  
  export default Gallery;
  