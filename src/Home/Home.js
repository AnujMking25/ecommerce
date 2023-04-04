import React from "react";
import BannerGenerics from "../component/Store/BannerGenerics";
import { Button } from "react-bootstrap";
import HomeBody from "./HomeBody";

const Home = () => {
  return (
    <>
      <BannerGenerics>
        <div style={{ width: "100%", margin: "20px auto", paddingLeft: "40%" }}>
          <Button  style={{
              background: "gray",
            }}>Get our Latest Album</Button>
          <br />
          <Button
            style={{
              marginLeft: "3.5rem",
              marginTop: "1rem",
              marginBottom:'1rem',
              background: "gray",
              height: "5rem",
              width: "5rem",
              borderRadius: "50%",
            }}
          >
            ►
          </Button>
        </div>
      </BannerGenerics>
      <HomeBody/>
    </>
  );
};

export default Home;
