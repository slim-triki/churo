import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Login}  from './components/login';
import ProtectedRoute from '../src/components/common/ProtectedRoute';
import { useState } from 'react';
import Page from './components/pages/page';
import './App.css';
import Home from './components/pages/Spage/home';
import {About,Blog,Contact,Portfolio,Shop} from './components/pages/Spage';
export default function App() {
  const [isAuth, setIsAuth] = useState(true);
  
  

  return (
    <div>
      
    <Router >
      <Switch>
      
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/shop" component={Shop} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
    
        
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
