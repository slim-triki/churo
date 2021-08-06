import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Login}  from './components/login';
import ProtectedRoute from '../src/components/common/ProtectedRoute';
import { useState } from 'react';
import Page from './components/pages/page';
import './App.css';
import Home from './components/pages/Spage/home';
export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  
  

  return (
    <div>
      
    <Router>
      <Switch>
      
    <Route path="/home" component={Home} />
    <Route path="/about" >zzzzzzzz</Route>
    <Route path="/portfolio" >dddddd</Route>
    <Route path="/shop" >waaddddaaaa</Route>
    <Route path="/blog" >zzzdddd</Route>
    <Route path="/contact" >xxxxxx</Route>
    
        
        <ProtectedRoute path="/page" component={Page} isAuth={isAuth}  />
        <Route path="/"   >
          <Login/>
          
          </Route>
      </Switch>
      
   </Router>
   </div>
  )
}








/*const handleExpand = () => {
  let churo = Auth();
  if(churo===true) {
  setIsAuth(true); 
  alert("you ") // is this ok in if?
}
}*/
