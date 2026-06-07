// import React from "react";
// import { Outlet,Navigate } from "react-router-dom";
// const PublicRoutes = ()=>{
//     const isAvalilable = localStorage.getItem('isAvailable') == 'true';
//     return(
// // isAvalilable ?<Outlet/> : <Navigate to='/' replace/>
//     )
// }
// export default PublicRoutes;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const user = localStorage.getItem("user");

  return(
     user ? <Navigate to="/" replace /> : <Outlet />
    
  )
};

export default PublicRoutes;