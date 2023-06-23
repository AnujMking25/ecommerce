import React from "react";
import MyCard from "./MyCard";

const CardData = () => {
  const productsArr = [
    {
      id: "p1",
      title: "Color Wallpaper",
      price: 1000,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "p2",
      title: "Black and white Color Wallpaper",
      price: 500,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "p3",
      title: "Yellow and Black Color Wallpaper",
      price: 700,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "p4",
      title: "Blue Color Wallpaper",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      {productsArr.map((item) => {
        return (
          // Data Store in Browser start
         <MyCard
            key={item.id}
            id={item.id}
            title={item.title}
            imgurl={item.imageUrl}
            price={item.price}
          /> 
          // Data Store in Browser End
        );
      })}
    </>
  );
};

export default CardData;
