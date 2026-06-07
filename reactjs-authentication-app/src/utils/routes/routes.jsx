import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import Login from "../../pages/login/login";
import SignUp from "../../pages/signup/signup";
import ProtectedRoutes from "../protectedRoutes/protectedRoutes";
import PublicRoutes from "../publicRoutes/publicRoutes";
const AppRoutes = ()=>{
    return(
        <Routes>
            {/* public routes */}
            <Route element={<PublicRoutes/>}>
<Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            </Route>

            
            {/* protected routes */}
            <Route element={<ProtectedRoutes/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>

            </Route>
            {/* <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/> */}
        </Routes>
    )
}
export default AppRoutes;