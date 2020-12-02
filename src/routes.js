import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Instructor from './pages/Instructor';
// Importar páginas aqui
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewClient from './pages/NewClient';
import NewInstructor from './pages/NewInstructor';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/instrutores" component={Instructor} />
      <Route path="/cadastro" component={Signup} />
      <Route path="/newclient" component={NewClient} />
      <Route path="/newinstructor" component={NewInstructor} />
    </Switch>
  );
};

export default Routes;
