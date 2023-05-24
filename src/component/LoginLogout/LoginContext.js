import React from "react";
const LoginContext=React.createContext({
    isLoggedIn:false,
    email:'',
    TokenIn: (idToken)=>{},
    TokenOut:()=>{},
});
export default LoginContext;