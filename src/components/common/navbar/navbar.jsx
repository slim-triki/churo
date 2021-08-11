import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Link,Switch,Route} from 'react-router-dom';
function Navbar(){
return(
    
        
<section className="navbar">
<Router forceRefresh>
    <Link to="/home " className="navbar-item" >Home</Link>
    
    <Link to="/about " className="navbar-item" >About</Link>
    <Link to="/portfolio " className="navbar-item" >Portfolio</Link>
    <Link to="/shop " className="navbar-item" >Shop</Link>
    <Link to="/blog " className="navbar-item" >Blog</Link>
    <Link to="/contact " className="navbar-item" >Contact</Link>
</Router>

</section>
       
    




)
}
export default Navbar; 