import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultData = {
  items: [],
  totalAmount:0,
};
const addToCart = (state, action) => {
  if (action.type === "ADD") {
    //  console.log(action.item.id);
    const updatedItemsTotalAmount = state.totalAmount +action.item.price ;
      const existingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id);
      const existingItem=state.items[existingCartItemIndex];
      let updatedItems;
      if(existingItem){
        const updateItem={
          ...existingItem,
          amount:existingItem.amount+1,
          price:existingItem.price+action.item.price,

        }
        updatedItems=[...state.items];
        updatedItems[existingCartItemIndex]=updateItem;
      }
      else{
        updatedItems = state.items.concat(action.item);
      }
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    };

  }
  if(action.type==="REMOVE"){

    const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
    const existingItem=state.items[existingCartItemIndex]; 
    const updatedTotalAmount=state.totalAmount-existingItem.price;
    let updatedItems;
   
    updatedItems= state.items.filter(item => item.id !== action.id)
    console.log(updatedItems);
    return ({
      items:updatedItems,
      totalAmount:updatedTotalAmount
    })


  }
  return defaultData;
};
const ContexProvider = (props) => {
  const [Cartstate, dispatchCartItem] = useReducer(addToCart, defaultData);

  const addToItem = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
 
  };
  const removeFromItem = (id) => {
    dispatchCartItem({type:"REMOVE" ,id:id})
  };
  const cartCtx = {
    items: Cartstate.items,
    totalAmount: Cartstate.totalAmount,
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
