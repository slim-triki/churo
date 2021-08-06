import React from 'react'
import { withRouter,useHistory,BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import {Header,Footer} from '../common/index'
import Home from './Spage/home';

 function Page() {
     let history= useHistory();
    return (
        
            <Router >
                
        <div>
            <Header/>
            
            
            U are logged in 
            
            <button onClick={()=>{
            history.push("/about")
            }}> churoo</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer/>
        </div>
        
        </Router>
    )
}

export default withRouter (Page) ;