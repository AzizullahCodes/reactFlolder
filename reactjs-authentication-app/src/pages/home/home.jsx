import React from "react";
import { useNavigate } from "react-router-dom";
const Home = ()=>{
    const navigate = useNavigate('');
    //logoutFun
    const logoutFunction = ()=>{
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn','false')
        navigate('/login')
    }
    return(
       <div>
         <h1>I am home page</h1>
        <button onClick={logoutFunction}>log out</button>
       </div>
    )
}
export default Home;