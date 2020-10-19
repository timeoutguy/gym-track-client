import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-primary h-20 px-2 lg:px-64 flex justify-between items-center font-bold">
      <h1 className="text-3xl text-white"> Gym track </h1>
      <div className="flex flex-row">
        <p className="mr-4 bg-white py-2 px-4 rounded-full text-primary">
          Login
        </p>
        <p className="mr-4 bg-white py-2 px-4 rounded-full text-primary">
          Cadastro
        </p>
      </div>
    </div>
  );
};

export default Navbar;
