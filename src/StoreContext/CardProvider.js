import React, { useEffect, useReducer, useState } from "react";
import CartContext from "./CartContext";

const defaultData = {
  items: [],
  totalAmount: 0,
};
const addToCart = (state, action) => {
  if (action.type === "ADD") {
    //  console.log(action.item.id);
    const updatedItemsTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
        price: existingItem.price + action.item.price,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedItemsTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    updatedItems = state.items.filter((item) => item.id !== action.id);
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultData;
};

const ContexProvider = (props) => {
  const [Cartstate, dispatchCartItem] = useReducer(addToCart, defaultData);

  const localStoragetoken = localStorage.getItem("token");
  const [token, setToken] = useState(localStoragetoken);

  const userIsLoggedIn = !!token;
  console.log("it is cardProvider", userIsLoggedIn);
  const addToItem = (item) => {
    dispatchCartItem({ type: "ADD", item: item });
  };
  const removeFromItem = (id) => {
    dispatchCartItem({ type: "REMOVE", id: id });
  };
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("LogoutTime")
  };
  const expireTimeInLocalStorage=useEffect( () => {
    const expireTime = localStorage.getItem("LogoutTime");
    const currentTime = +new Date().getMinutes();
    const RemainingMinute = expireTime - currentTime;
    if (RemainingMinute >= 0) {
      console.log("I am runing");
      setTimeout(()=>{
        removeToken();
        console.log("SEtTimeout running");
      }, RemainingMinute*1000*60);
    } else {
      if (RemainingMinute < 0) {
        removeToken();
      }
    }
  }
,[userIsLoggedIn])
  const addToken = (idToken, currentTime) => {
    setToken(idToken);

    localStorage.setItem("token", idToken);
    localStorage.setItem("LogoutTime", +currentTime + 1);

    expireTimeInLocalStorage();
  };

  const cartCtx = {
    items: Cartstate.items,
    totalAmount: Cartstate.totalAmount,
    addItem: addToItem,
    removeItem: removeFromItem,
    isLoggedIn: userIsLoggedIn,
    TokenIn: addToken,
    TokenOut: removeToken,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContexProvider;
