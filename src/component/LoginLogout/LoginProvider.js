import React,{useState,useEffect} from 'react'
import LoginContext from './LoginContext'

const LoginProvider = (props) => {
    
    const localStoragetoken = localStorage.getItem("Token");
    const [token, setToken] = useState(localStoragetoken);

    const userIsLoggedIn = !!token;
//*************************Token remove from local Storage     ==> START <==**********  
    const removeToken = () => {
        setToken(null);
        localStorage.removeItem("Token");
        localStorage.removeItem("LogoutTime");
        localStorage.removeItem('UserEmail')
      };

//***************************Token remove from local Storage     ==> END <==**********   

 // *********************  AutoLogout code start here ***************************  
      useEffect(() => {   
          setTimeout(()=>{
            removeToken();
          },30*1000*60);
        },[userIsLoggedIn])
// *********************  AutoLogout code End here *************************** 

// ***************Token Store(ADD) in Local Storage     ==> START <==***************************

const addToken = (idToken,email) => {
    setToken(idToken);
    localStorage.setItem("Token", idToken);
    localStorage.setItem('UserEmail',email)
  };
  // ***************  Token Store(ADD) in Local Storage  ==> END <== ***************************
    const logCtx={
    isLoggedIn:userIsLoggedIn,
    email: localStorage.getItem('UserEmail')===null ? '':localStorage.getItem('UserEmail'),
    TokenIn: addToken,
    TokenOut:removeToken,
    }
  return (
    <LoginContext.Provider value={logCtx}>{props.children}</LoginContext.Provider>
  )
}

export default LoginProvider