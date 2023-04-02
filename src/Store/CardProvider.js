import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultData = {
  items: [],
  totalAmount:0,
};
const addToCart = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedItemsTotalAmount =
      state.totalAmount +
      action.item.Tprice * action.item.TL +
      action.item.Tprice * action.item.TM +
      action.item.Tprice * action.item.TS;
      
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    };
  }
  return defaultData;
};
const ContexProvider = (props) => {
  const [Cartstate, dispatchCartItem] = useReducer(addToCart, defaultData);

  const addToItem = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
    // console.log('Hii this is Provider',item);
  };
  const removeFromItem = (id) => {};
  const cartCtx = {
    items: Cartstate.items,
    totalAmount: Cartstate.totalAmount,
    addItem: addToItem,
    removeItem: removeFromItem,
  };
  // console.log(cartCtx.items);
  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContexProvider;
