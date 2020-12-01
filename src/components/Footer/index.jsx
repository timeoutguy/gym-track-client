import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer mt-16">
      <h2 className="p-2 lg:px-24 lg:flex.items-center">WEBSITE MAP</h2>
      <div className="p-2 lg:px-24 lg:flex.items-center">
        <ul className="flex flex-col">
          <Link to="/" className="text-gray-600">
            Home
          </Link>
          <Link to="/login" className="text-gray-600 mt-2">
            Login
          </Link>
          <Link to="/cadastro" className="text-gray-600 mt-2">
            Cadastro
          </Link>
        </ul>
        <div className="flex flex-row justify-center text-center">
          <Link to="/" className="text-gray-600 px-4 mt-6">
            Termos de serviço
          </Link>
          <Link to="/" className="text-gray-600 px-4 mt-6">
            Política de Privacidade
          </Link>
          <Link to="/" className="text-gray-600 px-4 mt-6">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
