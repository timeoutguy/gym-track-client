import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Signup} />
    </Switch>
  );
};

export default Routes;
