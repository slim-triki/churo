import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Login}  from './components/login';
import ProtectedRoute from '../src/components/common/ProtectedRoute';
import { useState } from 'react';
import Page from './components/pages/page';

export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  
  return (
    <div>
      
    <Router>
      <Switch>
    <ProtectedRoute path="/page" component={Page} isAuth={isAuth}  />
      <Route path="/"  component={Login} />
      </Switch>
      
   </Router>
   </div>
  )
}
