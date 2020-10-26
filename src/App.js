import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';

import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
