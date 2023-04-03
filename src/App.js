import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import SearchList from './pages/SearchList/SearchList'
import Hotel from './pages/hotel/Hotel'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import CityHotel from './components/CategoriseHotel/CityHotel';
import { useContext, useEffect, useState } from "react";
import { AppContext } from './context/AuthContext';
import AuthenticateUser from "./components/AuthenticateUser/AuthenticateUser";
import AllHotels from "./components/AllHotels/AllHotels";
import Room from "./components/Rooms/Room";
import BookedRoom from "./components/Booked/BookedRoom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Home/> */}
      {/* <AuthenticateUser/> */}
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/hotel/:id" element={<Hotel/>} />
          <Route path="/city/:city" element={<CityHotel/>} />
          <Route path="allhotels" element={<AllHotels/>} />
          <Route path="room/:hotelId" element={<Room/>} />
          <Route path="bookedroom/:hotelId/:roomId" element={<BookedRoom/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
