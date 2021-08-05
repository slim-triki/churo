import React from 'react'
import { withRouter,useHistory } from 'react-router-dom'
 function Page() {
     let history= useHistory();
    return (
        <div>
            U are logged in 
            
            <button onClick={()=>{
            history.push("/about")
            }}> churoo</button>
            
        </div>
    )
}

export default withRouter (Page) ;