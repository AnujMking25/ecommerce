import React from "react";
import MyCard from "./MyCard";

const CardData = () => {
  const productsArr = [
    {
      id:'p1',
      title: "Colors",
      price: 1000,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {id:'p2',
      title: "Black and white Colors",
      price: 500,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {id:'p3',
      title: "Yellow and Black Colors",
      price: 700,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {id:'p4',
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
    {productsArr.map((item)=>{
        return <MyCard  id={ item.id} title={item.title} imgurl={item.imageUrl} price={item.price}/>
    })}
    </>
  );
};

export default CardData;
