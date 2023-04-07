import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';

function ContactUSForm() {
 const [userData,setuserData]=useState({
    UserName:'',
    UserEmail:'',
    UserPhoneNumber:'',
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
         async function PostDataToMyServer(ContactUsData){
            const response=await fetch('https://react-movies-app-46037-default-rtdb.firebaseio.com/EcommerceContactus.json',{
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
            UserPhoneNumber:''
        })
        
     }    
  return (
    <div style={{margin:'2rem 20rem 0 20rem'}}>
        <Form onSubmit={onSubmitFormHandler}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={userData.UserName} onChange={onUserName} placeholder='User Name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={userData.UserEmail} onChange={onUserEmail} placeholder='Enter email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" value={userData.UserPhoneNumber} onChange={onUserPhone} placeholder='Phone Number' />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default ContactUSForm;