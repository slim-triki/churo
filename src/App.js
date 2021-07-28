import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/common/ProtectedRoute';
import Page from './components/pages/page';

/*var objpeople =[
  {
      username:"slim",
      password:"slim"
  },
  {
      username:"k",
      password:"k"
  }
  ]*/
  /*;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
const handleSubmit = (e) => { 
    e.preventDefault();
    if (
        username === objpeople.username &&
        password === objpeople.password
      ) {
        //Signin Success
        setIsAuth(true);
        window.location.pathname = "/Page";
};*/

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Route path="/" exact>
    <div className="App">

      
      <section className="login-form">
        <section className="logo"> 
        <img src="logo.jpg" alt="logo" className="photo"/>
      </section>

      <section className="formulaire">
        <label >User</label>
        <input type="text"  id="user"    />
        <label >password</label>
        <input type="password"  id="pass"    />

      </section>
        <button type="submit" onClick={Auth} >Login</button>
        <Link to="/page" onClick={() =>{setIsAuth(true);}}>go</Link>
      </section>
     </div>
     
     </Route>
     
     <ProtectedRoute path="/Page" component={Page} isAuth={isAuth}  />
     </Router>
  );
}


var objpeople =[
  {
      username:"slim",
      password:"slim"
  },
  {
      username:"k",
      password:"k"
  }
  ]
function Auth(){
            
  
  var i;
  var username = document.getElementById("user").value;
  var password = document.getElementById("pass").value;

  for (i=0; i<objpeople.length;i++){

      if (username === objpeople[i].username && password === objpeople[i].password )
          {
              
             console.log(username + password +" is logged !");
             return
          }}
      
          console.log (username + password  +"incorrect username or password")
}
        


export default App;