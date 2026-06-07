// import React from "react";
// import { Outlet,Navigate } from "react-router-dom";
// const ProtectedRoutes = ()=>{
//     const isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
//     return(
// isLoggedIn ?<Outlet/> : <Navigate to='/login' replace/>
//     )
// }
// export default ProtectedRoutes;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("user");

  return (
    user ? <Outlet /> : <Navigate to="/login" replace />
  )
};

export default ProtectedRoutes;