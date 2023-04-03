import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultData = {
  items: [],
  totalAmount:0,
};
const addToCart = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedItemsTotalAmount = state.totalAmount +action.item.price ;
      
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    };

  }
  if(action.type==="REMOVE"){
    // console.log('i am runing');
    const existingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
    const existingItem=state.items[existingCartItemIndex];
    // console.log('i am runing now');
    const updatedTotalAmount=state.totalAmount-existingItem.price;
    // console.log(updatedTotalAmount);
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
