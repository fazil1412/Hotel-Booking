import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./City.css";
import Header from "./../Header/Header";
import axios from "axios";

const CityHotel = () => {
  const { city } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const getData = () => {
    axios
      .get("http://localhost:5000/hotel/gethotels")
      .then((res) => {
        const getFilteredData = res.data.hotels.filter((hotel) => {
          return hotel.city === city;
        });
        console.log("FilteredData: ", getFilteredData);
        setData(getFilteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div className="hotelContainerr">
        {data.map((hotel) => {
          return (
            <div key={hotel._id}>
              <div className="hotel">
                <div className="image">
                  <img
                    src={hotel.photos[0]}
                    className="img"
                    alt="hotelImg"
                  />
                </div>
                <div className="contentContainer">
                  <div className="content">
                    <h2 style={{ color: "purple" }}>{hotel.name}</h2>
                    <p>Distance</p>
                    <h3 style={{ color: "green" }}>Free Airport Taxi</h3>
                    <h3>Apartment with Ac</h3>
                    <span style={{ fontWeight: "bold" }}>Type:{hotel.type}</span>
                    <p>Villa</p>
                    <h1 style={{ color: "green" }}>Free Cancellation</h1>
                    <p style={{ color: "green" }}>
                      You can cancel later, so lock in this great price today
                    </p>
                  </div>
                  <div className="priceContainer">
                    <h1>{hotel.price}/-</h1>
                    <p>Includes taxes and fees</p>
                    <button className="btn" onClick={()=>navigate(`/hotel/${hotel._id}`)}>See Availability</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CityHotel;
