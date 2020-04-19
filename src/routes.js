import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login'
import InfoHospital from './pages/InfoHospital'
import Atendimento from './pages/Atendimento'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact render={props => <Home {...props}/>} />
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/infohospital" render={props => <InfoHospital {...props} />} />
      <Route path="/atendimento" render={props => <Atendimento {...props} />} />
    </Switch>
  );
}
