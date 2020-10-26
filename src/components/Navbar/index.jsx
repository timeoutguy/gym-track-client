import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-primary h-20 px-2 lg:px-64 flex justify-between items-center font-bold">
      <Link to="/" className="text-3xl text-white">
        Gym track
      </Link>
      <div className="flex flex-row">
        <Link
          to="/login"
          className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
        >
          Login
        </Link>
        <Link
          to="/cadastro"
          className="mr-4 bg-white py-2 px-4 rounded-full text-primary"
        >
          Cadastro
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
