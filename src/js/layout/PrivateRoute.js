import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(props){

    return(
        props.checkToken ? <Outlet/> : <Navigate to="/" />
    )
}

export default PrivateRoute;