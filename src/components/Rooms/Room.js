import React, { useContext, useEffect } from "react";
import "./Room.css";
import NavBar from "./../NavBar/NavBar";
import Header from "./../Header/Header";
import MailSection from "../mailComponent/MailSection";
import Footer from "./../footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { AppContext } from "../../context/AuthContext";

const Room = () => {
  const { hotelId } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [roomNo, setRoomNo] = useState(false);
  const { toDate, fromDate, user } = useContext(AppContext);

  const navigate = useNavigate();

  const getRoom = () => {
    axios.get(`http://localhost:5000/hotel/gethotel/${hotelId}`).then((res) => {
      console.log(res.data.hotels);
      setData(res.data.hotels);
    });
    setLoading(false);
  };

  useEffect(() => {
    getRoom();
  }, []);

  const handleChange = (id) => {
    setRoomId(id);
  };

  const bookHotel = () => {
    navigate(`/bookedroom/${hotelId}/${roomId}`);
    axios
      .post(`http://localhost:5000/booked/bookedroom`, {
        user: user._id,
        hotel: hotelId,
        room: roomId,
        price: data.price,
        checkIn: fromDate,
        checkOut: toDate,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar />
      {/* <Header type="list" /> */}
      <div className="Wrapper-Room">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <div className="roomContainer">
            <h3 style={{ marginBottom: "1rem",color:"red" }}>
              {data.rooms?.length === 0
                ? "No rooms Available for these hotel"
                : "Select Your Rooms"}
            </h3>
            {data.rooms?.map((room) => {
              return (
                <>
                  <div className="roomBox" key={room._id}>
                    <div className="roomContent">
                      <h4>{room.title}</h4>
                      <p>{room.desc}</p>
                      <p style={{ fontWeight: "700" }}>
                        Max people :
                        <span style={{ fontWeight: "bold" }}>
                          {room.maxPeople}
                        </span>
                      </p>
                      {/* <h4>${room.}</h4> */}
                    </div>

                    <div className="checkboxes">
                      <input
                        type="checkbox"
                        disabled={room.isBooked ? true : false}
                        style={{cursor:room.isBooked ?"not-allowed" :"pointer"}}
                        onChange={() => handleChange(room._id)}
                      />
                    </div>
                  </div>
                </>
              );
            })}

            {data.rooms?.length === 0 ? (
              <p></p>
            ) : (
              <button
                className="btn_reserve"
                onClick={() => bookHotel()}

                // disabled={!roomNo || data.rooms?.length===0  ? true : false}
              >
                Reserve Now
              </button>
            )}
          </div>
        )}
      </div>
      <MailSection />
      <Footer />
    </>
  );
};

export default Room;
