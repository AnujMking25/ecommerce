import React, { useState,useRef, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap'
import classes from './LoginLogout.module.css'
import LoginContext from './LoginContext';

const LoginLogout = () => {
  
    const [isLogin,setIsLogin]=useState(true);
    const [isLoading ,setIsLoading]=useState(false);  
    const logCtx=useContext(LoginContext);
   
    const emailInputRef=useRef();
  const passwordinputref=useRef();
  const Navigate=useNavigate();
    const CreateNewUser=()=>{
        setIsLogin((prev)=>!prev);
   
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordinputref.current.value;
        let url;
       setIsLoading(true)
        if (isLogin) {
          url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFdDZ48uSY8xzubhlA8ELMrBhppIy4dYs';
        } else {
          
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFdDZ48uSY8xzubhlA8ELMrBhppIy4dYs';
        }
        fetch(url,{
          method:'POST',
          body:JSON.stringify({
            email:enteredEmail,
            password:enteredPassword,
            returnSecureToken:true
          }),
          headers:{
            'Content-Type':'application/json'
          }
        }).then(response=>{
        
          if(response.ok)
          {
            return response.json();
          }else{
            return response.json().then((data)=>{
              let errorMessage='Authentication failed'
              setIsLoading(false)
              throw new Error(errorMessage);
            })
          }
        }).then((data)=>{
          // const currentTime=new Date().getMinutes();
           logCtx.TokenIn(data.idToken,enteredEmail)
            Navigate('/store');
        }).catch(err=>{
          alert(err.message)
        })
      
    }

  return (<>
    <h2 style={{textAlign:'center',marginTop:'3rem'}}>Login for Buying Product</h2>
    <div className={classes.maindiv}>
      
    <Form onSubmit={onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={emailInputRef}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={passwordinputref}/>
      </Form.Group>

        {!isLoading && <Button variant="primary" type="submit"> {isLogin ? 'Login' :'Create Account'}</Button>}
      <br/>
      {!isLoading && <Button variant="primary" type="button" onClick={CreateNewUser}>
         {isLogin ? 'Creat New Account':'Login with existing account'}
       </Button>}
       {isLoading &&  <p >Sending Request...</p>} 
    </Form>
    </div>
    </>
  )
}

export default LoginLogout