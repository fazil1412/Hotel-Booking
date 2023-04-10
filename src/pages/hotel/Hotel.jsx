
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLocationDot, faCircleXmark, faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import NavBar from '../../components/NavBar/NavBar'
import './hotel.css'
import MailSection from '../../components/mailComponent/MailSection'
import Footer from '../../components/footer/Footer'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './../../context/AuthContext';
import Room from '../../components/Rooms/Room'

function Hotel() {
  const [data,setData] = useState([]);
  const {user} = useContext(AppContext);
  const navigate = useNavigate()
const {id} = useParams();
const {setFromDate,setToDate,fromDate,toDate} = useContext(AppContext)

const getHotelById = () => {
  axios.get(`http://localhost:5000/hotel/gethotel/${id}`)
  .then(res => {
    console.log(res.data.hotels);
    setData(res.data.hotels)

  })
}

useEffect( () => {
  getHotelById()
},[])

const BookHotel = (id) => {
  console.log(fromDate,toDate)
  if(fromDate==="" && toDate===""){
    alert("Please Enter checkIn and CheckOut Date")
  }
  else{
    if(user._id){
      navigate(`/room/${id}`);
    }
    else{
      navigate("/login")
    }
  }
 
}

  return (
    <div className='wrapper'>
      <NavBar />
      <Header type="list" />
        <div className="Container">
          <div className='contentCont'>
         <h1>{data.name}</h1>
         {/* <FontAwesomeIcon icon={faLocationDot} /> */}
         <span>{data.address}</span>
         <p style={{color:"blue"}}>Excellent Location -{data.distance}</p>
         <h3  style={{color:"green"}}>Book a stay Over ${data.price} at this property and get a free airport taxi</h3>
          </div>
         <div className='imgContainer'> 
        {
          data.photos?.map(img => {
            return(
              <img src={img} />
            )
          })
        }
           {/* <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" />
           <img src="https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif"/>
           <img src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48360698.jpg?k=1949036cc17d7e11e914390f1d3958823e8620aa6ed69e2b3f217794b603dbc5&o="/>
           <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg"/>
           <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"/>
           <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"/> */}
         </div>

         <div className=' exContainer'>
          <div className='contentEx'>
          <h2>Experiencd World Class Service</h2>
          <p>{data.desc}</p>
         </div>
         
         <div className='box'>
          <div className='dates'>
          <input type='date' className='fromdate' value={fromDate}  onChange={(e)=>setFromDate(e.target.value)}/>
           <span className='to'>To</span>
           <input type='date' className='todate' value={toDate} onChange={(e)=>setToDate(e.target.value)}/>

          </div>
          <h3>Perfect for a 2 night stay</h3>
          <p>{data.desc}</p>
          <h2>{data.price * 2 } for <span>(2 nights)</span></h2>
          <button onClick={()=>BookHotel(data._id)}  > Book Now</button>
         </div>
          </div>
      
        
        </div>
          <MailSection />
          <Footer />
    </div>
  )
}

export default Hotel;
