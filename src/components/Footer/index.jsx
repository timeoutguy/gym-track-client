import React from 'react';

const Footer = () => {
  return (
    <div className="footer mt-8">
      <h2 className="p-2 lg:px-24 lg:flex.items-center">WEBSITE MAP</h2>
      <div className="p-2 lg:px-24 lg:flex.items-center">
        <ul>
          <li className="text-gray-600">Home</li>
          <li className="text-gray-600 mt-2">Sobre</li>
        </ul>
        <div className="flex flex-row justify-center text-center">
          <h2 className="text-gray-600 px-4 mt-6">Termos de serviço</h2>
          <h2 className="text-gray-600 px-4 mt-6">Política de Privacidade</h2>
          <h2 className="text-gray-600 px-4 mt-6">Sitemap</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
