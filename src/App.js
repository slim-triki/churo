import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Login}  from './components/login';


export default function App() {
  return (
    <Router>
      <Login/>
   </Router>
  )
}
