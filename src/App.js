import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route ,Redirect,useHistory,Switch} from 'react-router-dom';
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
  const [isAuth, setIsAuth] = useState(true);
  
  const history = useHistory();
  const HandleHistory =() =>{
    let churo = Auth();
    if(churo===true){
   history.push("/page");}
   else {console.log("why")}

  
  }
  
  return (
    
      <Switch>
      <Route path="/" exact>
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
        <button type="submit" onClick={HandleHistory}  >Login</button>
        
      </section>
      
     </div>
     
     </Route>
     <Route path="/about" />
     <ProtectedRoute path="/Page" component={Page} isAuth={isAuth}  />
     </Switch>
     
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
         console.log(msg);
       }
      } 
    }
      
        
      
        
      
   
       /*console.log (username + password  +"incorrect username or password")*/
 


  /*function ProtectedRoute ({  component: Component, ...Rest  } ) {
 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    return (
      
        <Route {...Rest} render={(props)=>{
          for (let i=0; i<objpeople.length;i++){
            if (username === objpeople[i].username && password === objpeople[i].password ){
                return <Component/>
            } else {
                return (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                );
            }
        }
  
        }}/>
            
        
    )
  }*/
/*function ProtectedRoute ({  component: Component, ...Rest  } ) {
 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (let i=0; i<objpeople.length;i++){
  return (
    
      <Route {...Rest} render={(props)=>{
          if (username === objpeople[i].username && password === objpeople[i].password ){
              return <Component/>
          } else {
              return (
                  <Redirect to={{pathname: "/", state: {from: props.location}}}/>
              );
          }
      }

      }/>
          
      
  )
}}*/

export default App;
/*function Auth(){
       

var i;
var username = document.getElementById("user").value;
var password = document.getElementById("pass").value;

for (i=0; i<objpeople.length;i++){

   if (username === objpeople[i].username && password === objpeople[i].password )
       {
           
          console.log(username + password +" is logged !"); 
          return(true)
       }}
   
       console.log (username + password  +"incorrect username or password")
}
 <Link to="/page" onClick={() =>{setIsAuth(true);}}>go</Link>*/   