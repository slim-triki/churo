import React from 'react'
import { withRouter,useHistory } from 'react-router-dom'
import {Header,Footer} from '../common/index'
 function Page() {
     let history= useHistory();
    return (
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
    )
}

export default withRouter (Page) ;