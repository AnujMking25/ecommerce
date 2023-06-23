import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import classes from './ContactUs.module.css'
function ContactUSForm() {
 const [userData,setuserData]=useState({
    UserName:'',
    UserEmail:'',
    UserPhoneNumber:'',
    UserMessage:''
 })   
 function onUserName(e){
setuserData({
    ...userData,
    UserName:e.target.value
})
 }
 function onUserEmail(e){
    setuserData({
        ...userData,
        UserEmail:e.target.value
    })
     }
     function onUserPhone(e){
        setuserData({
            ...userData,
            UserPhoneNumber:e.target.value
        })
         }
   function onUserMessage(e){
      setuserData({
             ...userData,
              UserMessage:e.target.value
          })
           }
         async function PostDataToMyServer(ContactUsData){
            const response=await fetch('https://ecommerce-app-38a32-default-rtdb.firebaseio.com/EcommerceContactus.json',{
                method:'POST',
                body:JSON.stringify(ContactUsData),
                headers:{
                  'Content-Type':'application/json'
                }
            })
            const data=await response.json();
            console.log(data);
        }
     function onSubmitFormHandler(e){
        e.preventDefault();
        PostDataToMyServer(userData);
        setuserData({
            UserName:'',
            UserEmail:'',
            UserPhoneNumber:'',
            UserMessage:''
        })
        alert('Thank You for contact Us')
        
     }    
  return (
    <> <h1 className={classes.h1}>Contact us</h1>
    <div className={classes.maindiv}>
   
        <Form onSubmit={onSubmitFormHandler}>
        
        <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={userData.UserName} onChange={onUserName} placeholder='User Name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={userData.UserEmail} onChange={onUserEmail} placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" value={userData.UserPhoneNumber} onChange={onUserPhone} placeholder='Phone Number' />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" value={userData.UserMessage} onChange={onUserMessage} placeholder='Phone Number' />
      </Form.Group>
      
      <Button type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  );

}

export default ContactUSForm;