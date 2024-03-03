import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import moment from "moment";
import { AppContext } from '../../context/AuthContext';

const ListBookedRoom = () => {
    const { toDate, fromDate, user } = useContext(AppContext);
    const [data, setData] = useState([]);
    const getUserbooking = () => {
      axios
        .get(`http://localhost:5000/booked/getuserbookedroom/${user._id}`)
        .then((res) => {
          console.log(res.data.userRoom);
          setData(res.data.userRoom);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    useEffect(() => {
      getUserbooking();
    }, []);

    const cancelBooking = (id,roomId) => {
        axios.delete(`http://localhost:5000/booked/removeroom/${id}/${roomId}`)
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        });
        let filterBroom = data.filter(item => {
            return item._id !==id
        });
        setData(filterBroom)
    }
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center", marginTop: "1rem",color:data.length <=0 ? "red" : "" }}>{data.length <=0 ? "No Bookings Yet!" : "Your bookings"}</h1>
      <div className="bookedContainer">
        { data.map((info,i) => {
          return (
            <div className="bookings">
              <h3>BookingId : {info._id}</h3>
              <h3>UserName : {info.user.userName}</h3>
              <h3>Mobile No : {info.user.phone}</h3>
              <h3>Hotel name : {info.hotel.name}</h3>
              {/* moment("2021-07-14T00:00:00.000Z").utc().format('YYYY-MM-DD') */}
              <h3>CheckIn : {moment(info.checkIn).utc().format('DD-MM-YYYY')}</h3>
              <h3>CheckOut: {moment(info.checkOut).utc().format('DD-MM-YYYY')}</h3>
              {/* <h3>Room No :{info.room.roomNumbers[i]}</h3> */}
              <h3>Price :{info.price} </h3>
              <h3>Payment :Cash On Delivery </h3>
              <button onClick={()=>cancelBooking(info._id,info.room._id)} style={{float:"right",padding:"8px 15px",borderRadius:"5px",outline:"none",cursor:"pointer",backgroundColor:"#EAB543",border:"1px solid #182C61"}}>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ListBookedRoom