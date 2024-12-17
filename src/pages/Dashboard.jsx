import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Uploads */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Recent Uploads</h2>
          <div className="space-y-2">
            <div className="bg-gray-700 p-3 rounded text-gray-300">Moonshot Image 1</div>
            <div className="bg-gray-700 p-3 rounded text-gray-300">Moonshot Image 2</div>
            <div className="bg-gray-700 p-3 rounded text-gray-300">Moonshot Image 3</div>
          </div>
          <Link
            to="/gallery"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            View All
          </Link>
        </div>

        {/* Actions */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-col space-y-4">
            <Link
              to="/upload"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600"
            >
              Upload a New Moonshot
            </Link>
            <Link
              to="/profile"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg text-center hover:bg-gray-800"
            >
              Edit Your Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
