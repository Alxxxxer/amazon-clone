import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser).user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('userInfo');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Amazon Clone</Link>
      <div className="flex gap-4">
        {user ? (
          <>
            <span className="text-yellow-300 font-semibold">Hi, {user.name}</span>
            <button onClick={logoutHandler} className="bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">Login</Link>
            <Link to="/register" className="bg-green-500 px-3 py-1 rounded">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
