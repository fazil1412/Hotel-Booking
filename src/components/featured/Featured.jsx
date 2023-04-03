import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    axios
      .get("http://localhost:5000/hotel/gethotels")
      .then((res) => {
        console.log(res.data.hotels);
        setHotels(res.data.hotels);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div className="featured">
      <div
        className="featuredItem"
        onClick={() => navigate(`/city/${"Mumbai"}`)}
      >
        <img
          src="https://thirdeyetraveller.com/wp-content/uploads/COCONUTHILL-1-of-12-scaled-689x517.jpg"
          alt="Image6"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h3>3 Properties</h3>
        </div>
      </div>

      <div
        className="featuredItem"
        onClick={() => navigate(`/city/${"Hyderabad"}`)}
      >
        <img
          src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
          alt="Image6"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Hyderabad</h1>
          <h3>3 Properties</h3>
        </div>
      </div>

      <div
        className="featuredItem"
        onClick={() => navigate(`/city/${"Banglore"}`)}
      >
        <img
          src="https://exploresrilanka.lk/wp-content/uploads/2019/12/1-768x576-1.webp"
          alt="Image3"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Banglore</h1>
          <h3>3 Properties</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;
