import React from 'react'
import { Redirect,Route } from 'react-router-dom'

 function ProtectedRoute ({ isAuth : Isauth, component: Component, ...Rest  } ) {
    return (
        <Route {...Rest} render={(props)=>{
            if (Isauth ){
                return <Component/>
            } else {
                return (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                );
            }
        }

        }/>
            
        
    )
}
export default ProtectedRoute;