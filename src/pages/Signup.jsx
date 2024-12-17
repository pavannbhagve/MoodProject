import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-gray-700 rounded text-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-700 rounded text-gray-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 bg-gray-700 rounded text-gray-300"
          />
          <button className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Sign Up
          </button>
        </form>
        <p className="text-gray-400 mt-4 text-sm">
          Already have an account? <Link to="/login" className="text-blue-500">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
