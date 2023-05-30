import React, {useContext, useEffect, useState } from "react";
import CartContext from "./CartContext";
import LoginContext from "../component/LoginLogout/LoginContext";

const defaultCartData = {
  items: [],
  totalAmount: 0,
};

const ContexProvider = (props) => {
 
  const [currentCart, setCurrentCart] = useState(defaultCartData);
  const logCtx=useContext(LoginContext);
  let Email=logCtx.email;
  Email=Email.replace("@","").replace(".",'')
  console.log(Email);
  const url=`https://crudcrud.com/api/b81aa2b3eb364134a409334f271c7d6c/${Email}`;

  useEffect(() => {
    if(logCtx.isLoggedIn)
  {
    fetch(`https://crudcrud.com/api/b81aa2b3eb364134a409334f271c7d6c/${Email}`)
    .then((response)=>response.json())
    .then((res)=>{
      setCurrentCart(()=>{ 
        let sum=0,refreshedCartData=[];
        for(let i=0;i<res.length;i++){
         
          refreshedCartData.push(res[i]);
          // sum=sum+ res[i].price*res[i].amount;
          sum=sum+ res[i].price
        }
        return{
          items:refreshedCartData,
          totalAmount:sum,
        }
      })
    }).catch(err=>alert(err))
  }
    
  }, [Email,logCtx.isLoggedIn])
  
 // ****************** Item Add to cart  ==> START HERE<== ***************************


//  ***************** Post New Data In Server  ==>START HERE <==*****************************
 const postDataInServer=async(item)=>{
    let response;
    try {
       response=await fetch(url,{
        method:"POST",
        body: JSON.stringify(item),
        headers:{
          'Content-Type':'application/json'
        },
      })
      response=await response.json();
      alert("Item successfully Add",response)
    } catch (error) {
      alert(error)
      return;
    }
 }
//  ***************** Post New Data In Server         ==>END HERE <==*************************

// ****************** Put request(data update in server)==> START HERE <==********************
const PutRequestcall=(updateItem,updateId)=>{
  // console.log("updateID in putRequest  ",updateId);
  fetch(`${url}/${updateId}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      id:updateItem.id,
      imageurl:updateItem.imageurl,
      title:updateItem.title,
      price:updateItem.price,
      amount:updateItem.amount
    }),
    
  })
  .then(response=>response)
  .then((response)=>alert('Card Data updated'))
  .catch((err)=>alert('Error in put request',err))
}

const UpdateDataOnServer=(updateItem)=>{

  let updateId;
  console.log("updateItemID=====>",updateItem.id);
  fetch(url)
    .then(response=>response.json())
    .then(res=>{
      for(let i=0;i<res.length;i++){
        console.log('***********************');
        console.log(res[i]);
      if(updateItem.id===res[i].id){
             updateId=res[i]._id;
        PutRequestcall(updateItem,updateId);
        break
      }
    }
    }).catch(err=>alert('Error in get request',err))
}
// ****************** Put request(data update in server)==> END HERE <==********************  
// *************************Delet data from server    ==>START HERE<==************************
const deleteDataFromServer=async(RemoveId)=>{
  let DelId;
const getData=await fetch(url);
  
const res=await getData.json();
for(let i=0;i<res.length;i++){
    if(RemoveId===res[i].id){
      DelId=res[i]._id;
    }
  }
  

await fetch(`${url}/${DelId}`,{
    method:'DELETE'
  })
}
// *************************Delet data from server    ==>END HERE<==**************************
 const addToItem =(item) => {

   setCurrentCart((prevCart)=>{
    const updatedItemsTotalAmount = prevCart.totalAmount + item.price;
    const existingCartItemIndex = prevCart.items.findIndex((previtem) => previtem.id === item.id);

    const existingItem = prevCart.items[existingCartItemIndex];
    let updatedItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
        price: existingItem.price + item.price,
      }; 
     
      UpdateDataOnServer(updateItem);

      updatedItems = [...prevCart.items];
      updatedItems[existingCartItemIndex] = updateItem;
     
      
    } else {
    updatedItems = prevCart.items.concat(item);
    postDataInServer(item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    }
   })
  };

     
// ****************** Item Add to cart  ==> END HERE<== ***************************

const removeFromItem = (RemoveId) => {
   
setCurrentCart((prevCart)=>{
  const existingCartItemIndex = prevCart.items.findIndex(
    (previtem) => previtem.id === RemoveId
  );
  const existingItem = prevCart.items[existingCartItemIndex];
  let updatedItems;  
  let updatedTotalAmount;
  if(existingItem.amount===1){
    
    updatedTotalAmount = prevCart.totalAmount - existingItem.price;
    updatedItems = prevCart.items.filter((previtem) => previtem.id !== RemoveId);
    deleteDataFromServer(RemoveId);
    }
    else{
      const updateItem={
        ...existingItem,
        price: existingItem.price-(existingItem.price/existingItem.amount),
        amount:existingItem.amount-1,
      };
      UpdateDataOnServer(updateItem);
      updatedTotalAmount = prevCart.totalAmount - (existingItem.price/existingItem.amount);
      updatedItems=[...prevCart.items];
      updatedItems[existingCartItemIndex]=updateItem;
    }
   
  return {
    items: updatedItems,
    totalAmount: updatedTotalAmount,
  };
})
  };
 
  const cartCtx = {
    items: currentCart.items,
    totalAmount: currentCart.totalAmount,
    addItem: addToItem,
    removeItem: removeFromItem,
  };
  
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContexProvider;
