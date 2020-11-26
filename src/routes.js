import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewClient from './pages/NewClient';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/cadastro" component={Signup} />
      <Route path="/newclient" component={NewClient} />
    </Switch>
  );
};

export default Routes;
