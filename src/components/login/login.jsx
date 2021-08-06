import React from 'react';
import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route ,useHistory,Switch} from 'react-router-dom';
import './login.css';
import ProtectedRoute from '../common/ProtectedRoute'
import Page from '../pages/page';
export default Login;



function Login() {
  const [isAuth, setIsAuth] = useState(false);
  
    
  
  const history = useHistory();
  const HandleHistory =() =>{
    let churo = Auth();
    if(churo===true){
   history.push("/page");
   setIsAuth (true);
   console.log(isAuth);
  }
   else {console.log("why");
   console.log(isAuth);
    }
  }
  
  return (
    <Router>
      <Switch>
      <Route path="/" >
    <div className="App">

      
      <section className="login-form">
        <section className="logo"> 
        <img src="logo.jpg" alt="logo" className="photo"/>
      </section>

      <section className="formulaire">
        <label >User</label>
        <input type="text"  id="username"    />
        <label >password</label>
        <input type="password"  id="password"    />

      </section>
        <button type="submit" onClick={HandleHistory}>Login</button>
        
      </section>
      
     </div>
     
     </Route>
     <Route path="/about" />
     <ProtectedRoute path="/page" component={Page} isAuth={isAuth}  />
     </Switch>
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

 function Auth(msg ){
       
  

var i;
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

for (i=0; i<objpeople.length;i++){

   if (username === objpeople[i].username && password === objpeople[i].password )
       {msg = true;
        console.log(msg);
        return (msg)
       }else{ msg= false;
         
       }
      } 
    }
    
    