import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth';

import Navbar from './components/Navbar';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
