import React from 'react';
import './login.css';
import { Redirect, BrowserRouter as Router, Route   } from 'react-router-dom';
export default Login;

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



/*const [userData,setUserData]=usestate ({ username:"",password:""});
const handleInputChange = (e) =>{ 
    setUserData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });

};
const handleSubmit = (e) => { 
    e.preventDefault();
    if (
        userData.username() === objpeople.username &&
        userData.password === objpeople.password
      ) {
        //Signin Success
        localStorage.setItem("isAuthenticated", "true");
        window.location.pathname = "/home";
};*/

function Login() {
    
    return(
<section className="login-form">
    

    <section className="logo">
        <img src="logo.jpg" alt="logo" className="photo"/>
    </section>
    <section className="formulaire">
        <label >User</label>
        <input type="text"  id="username" name="user"   />
        <label >password</label>
        <input type="password"  id="password " name="pass" />

    </section>
        <button  >Login</button>
    </section>



    )
} 



}


/*const fakeAuth ={
    isAuthenticated : false,
    authenticate(cb){
        this.isAuthenticated=true
        setTimeout(cb, 100)
    },
    signout (cb){
        this.isAuthenticated=false
        setTimeout(cb,100)
    }
}*/

/*function PrivateRoute({ children, ...rest }){
    return (
        <Route {...rest} render={() => {
            return fakeAuth.isAuthenticated === true
            ? children
            : <Redirect to='/Login' />
        }} >
        </Route>
            
    )
}*/


    /*function Auth(){
            

            var i;
            var username = document.getElementById("user").value;
            var password = document.getElementById("pass").value;
            for (i=0; i<objpeople.length;i++){
                if(
                    uasername === objpeople[i].usernme && password === objpeople[i].password)
                    {return (
                        <Redirect to ='/Home' />)
                       
                        /*console.log(username  +" is logged !");
                    }
                }
                    console.log(username + password +"incorrect username or password")
        }*/