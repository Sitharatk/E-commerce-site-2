import { Toast } from 'bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
    const [Data, setData] = useState({
        username: '',
        email: '',
        password: '',
        cpassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    if (Data.password === Data.cpassword) {
           navigate('/'); 
        } else {
            toast.error("Passwords do not match!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-300 to-purple-300">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={Data.username}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={Data.email}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={Data.password}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="cpassword"
                            placeholder="Confirm Password"
                            value={Data.cpassword}
                            required
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-700">
                        Already have an account?{' '}
                        <span className="text-blue-600 font-bold underline">
                            <Link to="/login"> Login</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
