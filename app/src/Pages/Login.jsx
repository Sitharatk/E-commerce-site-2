import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
        navigate('/home')
    }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-300 to-purple-300">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="email" 
            required value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
          <input 
            type="password" 
            placeholder="Password" 
            required value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          />
        </div>
        <button 
          className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
        >
          Login
        </button>
        </form>
        <div className="text-center mt-4">
            <p className="text-sm text-gray-700">
              Don't have an account?{' '}
              <span className="text-blue-600 font-bold underline">
                <Link to="/signup"> Sign Up</Link>
              </span>
            </p>
          </div>
      </div>
    </div>
  );
}

export default Login;
