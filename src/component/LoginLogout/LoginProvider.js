import React,{useState,useEffect} from 'react'
import LoginContext from './LoginContext'

const LoginProvider = (props) => {
    
    const localStoragetoken = localStorage.getItem("Token");
    const [token, setToken] = useState(localStoragetoken);

    const userIsLoggedIn = !!token;
//*************************Token remove from local Storage       ==> START <==**********  
    const removeToken = () => {
        setToken(null);
        localStorage.removeItem("Token");
        localStorage.removeItem("LogoutTime");
        localStorage.removeItem('UserEmail')
      };

//***************************Token remove from local Storage     ==> END <==**********   

      // *********************  AutoLogout code start here ***************************  
      useEffect( () => {
        const expireTime = localStorage.getItem("LogoutTime");
        const currentTime = +new Date().getMinutes();
        const RemainingMinute = expireTime - currentTime;
        if (RemainingMinute >= 0) {
          
          setTimeout(()=>{
            removeToken();
            console.log("SetTimeout running");
          }, RemainingMinute*1000*60);
        } else {
          if (RemainingMinute < 0) {
            removeToken();
          }
        }
      }
    ,[userIsLoggedIn])
// *********************  AutoLogout code End here *************************** 

// ***************Token Store(ADD) in Local Storage     ==> START <==***************************

const addToken = (idToken, currentTime,email) => {
    setToken(idToken);
    localStorage.setItem("Token", idToken);
    localStorage.setItem("LogoutTime", +currentTime + 30);
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