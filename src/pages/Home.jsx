import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/src/assets/images/17522.jpg')`,
      }}
    >

    
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Share Your Moonshots</h1>
      <p className="text-gray-400 mb-6">Capture and share the beauty of the Moon.</p>
      <div className="flex space-x-4">
        <Link to="/signup" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign Up
        </Link>
        <Link to="/login" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          Log In
        </Link>
      </div>
    </div>
    </div>
  );
};
export default Home;
