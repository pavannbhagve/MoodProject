import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Moonshot</Link>
        <div className="space-x-4">
          <Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link>
          <Link to="/upload" className="text-gray-300 hover:text-white">Upload</Link>
          <Link to="/profile" className="text-gray-300 hover:text-white">Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
