
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
import Reserve from '../../components/reserve/Reserve'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './../../context/AuthContext';

function Hotel() {
  const [data,setData] = useState([]);
  const {user} = useContext(AppContext)
  const navigate = useNavigate()
const {id} = useParams();
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

  return (
    <div className='wrapper'>
      <NavBar />
      <Header type="list" />

     
        <div className="Container">
          <div className='contentCont'>
         <h1>Zaid Hotel</h1>
         {/* <FontAwesomeIcon icon={faLocationDot} /> */}
         <span>Jeevan Baugh Mumbra</span>
         <p style={{color:"blue"}}>Excellent Location -700m from center</p>
         <h3  style={{color:"green"}}>Book a stay Over $150 at this property and get a free airport taxi</h3>
          </div>
         <div className='imgContainer'> 
           <img src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg" />
           <img src="https://teja12.kuikr.com/is/a/c/880x425/public/images/apartments/original_img/k9yqlp.gif"/>
           <img src="https://cf.bstatic.com/xdata/images/xphoto/max1440/48360698.jpg?k=1949036cc17d7e11e914390f1d3958823e8620aa6ed69e2b3f217794b603dbc5&o="/>
           <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg"/>
           <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"/>
           <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg"/>
         </div>

         <div className=' exContainer'>
          <div className='contentEx'>
          <h2>Experiencd World Class Service</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptas vitae doloribus obcaecati pariatur deleniti, incidunt error dolore! Numquam sunt dolorum minima placeat consectetur? Ut ad eius tempora labore aliquam accusantium et nulla cumque nam at ullam placeat rem rerum beatae saepe accusamus fuga explicabo illum earum dignissimos, aut blanditiis. Labore beatae, facere vel pariatur sint aut commodi corrupti, nobis mollitia laborum sed, porro ipsum alias eveniet odio quisquam itaque eaque adipisci facilis enim? Nemo delectus enim impedit. Provident ab possimus tenetur voluptate asperiores consequuntur eveniet reiciendis quae soluta! Adipisci modi minima impedit placeat porro accusantium voluptatum, ea magni quasi?</p>
         </div>
         
         <div className='box'>
          <h3>Perfect for a 2 night stay</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit quae harum sapiente quaerat impedit non magnam molestias perspiciatis cupiditate iure.</p>
          <h2>$300 <span>(2 nights)</span></h2>
          <button onClick={()=>user._id ? navigate("/register"): navigate("/login")}> Book Now</button>
         </div>
          </div>
      
        
        </div>
          <MailSection />
          <Footer />
    </div>
  )
}

export default Hotel;
