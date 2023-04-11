import React, { useState,useRef, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button,Form } from 'react-bootstrap'
import classes from './LoginLogout.module.css'
import CartContext from '../../StoreContext/CartContext';
const LoginLogout = () => {
  
    const [isLogin,setIsLogin]=useState(true);
    const [isLoading ,setIsLoading]=useState(false);  
    const cartCtx=useContext(CartContext);
   
    const emailInputRef=useRef();
  const passwordinputref=useRef();
  const Navigate=useNavigate();
    const CreateNewUser=()=>{
        setIsLogin((prev)=>!prev);
   
    }


    useEffect(() => {
     const settimeout= setTimeout(()=> {
        localStorage.removeItem('token')
       }, 10000);
       console.log('hii its LoginLogout page setTimeout');
    
    // return() =>{
    //   clearTimeout(settimeout);
    // }
    
    },[])
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const enteredEmail=emailInputRef.current.value;
        const enteredPassword=passwordinputref.current.value;
        let url;
       setIsLoading(true)
        if (isLogin) {
          url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgIhB5WrJOY3OaJJjaazkQ5CYYgrWuxiU';
        } else {
          
          url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgIhB5WrJOY3OaJJjaazkQ5CYYgrWuxiU';
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
          // console.log(data.idToken);
           cartCtx.TokenIn(data.idToken)
            Navigate('/store');
        }).catch(err=>{
          alert(err.message)
        })
      
    }

  return (
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
  )
}

export default LoginLogout