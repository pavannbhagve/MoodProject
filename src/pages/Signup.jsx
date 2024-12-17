import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();  // This will allow us to programmatically navigate to a different page after sign-up

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the user's credentials or perform your sign-up logic here
    // For example, you can store email and password in localStorage
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    // After saving, you can navigate to the login page or stay on the sign-up page
    navigate('/login');  // This will redirect them to the login page
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://wallpapercave.com/wp/7xTFkFR.jpg')" }}>
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-gray-700 rounded text-gray-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-700 rounded text-gray-300"
          />
          <input
            type="password"
            name="password"
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
