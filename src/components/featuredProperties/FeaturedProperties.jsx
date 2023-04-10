import axios from 'axios';
import React from 'react'
import useFetch from '../../hooks/useFetch'
import './featuredProperties.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedProperties = () => {
    const [data,setData] = useState([]);
    const navigate= useNavigate();

    const getFeaturedData = () => {
        axios.get("http://localhost:5000/hotel/gethotels")
        .then(res => {
            const filterData = res.data.hotels.filter(hotel => {
                return hotel.isFeatured===true
            })
            setData(filterData)
            console.log("filterData Data :",filterData)
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
getFeaturedData()
},[])

    return (
        <div className="FeaturedProperties">
            {
                data.map( hotel => {
                    return (
                        <div className="FeaturedPropertiesItem" onClick={()=>navigate(`/hotel/${hotel._id}`)}>
                        <img src={hotel.photos[0]} alt='image1' className='FeaturedPropertiesImg' />
                        <span className="FeaturedPropertiesName">{hotel.city}</span>
                        <span className="FeaturedPropertiesCity" style={{fontWeight:"700"}}>{hotel.name}</span>
                        <span className="FeaturedPropertiesPrice">Starting from {hotel.price - 100}</span>
                       <div className="FeaturedPropertiesRating">
                            <button>4.0</button>
                            <span>Excellent</span>
                        </div>
                    </div>
                    )
                })
            }
                 
                        {/* <div className="FeaturedPropertiesItem">
                            <img src="https://cabinsathickoryridge.com/media/The-Lodge-Spring.jpg" alt='image1' className='FeaturedPropertiesImg' />
                            <span className="FeaturedPropertiesName">Mumbai</span>
                            <span className="FeaturedPropertiesCity">thane</span>
                            <span className="FeaturedPropertiesPrice">Starting from Rs.2000</span>
                           <div className="FeaturedPropertiesRating">
                                <button>4.0</button>
                                <span>Excellent</span>
                            </div>
                        </div>
                        <div className="FeaturedPropertiesItem">
                            <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg" alt='image1' className='FeaturedPropertiesImg' />
                            <span className="FeaturedPropertiesName">Mumbai</span>
                            <span className="FeaturedPropertiesCity">thane</span>
                            <span className="FeaturedPropertiesPrice">Starting from Rs.2000</span>
                           <div className="FeaturedPropertiesRating">
                                <button>4.0</button>
                                <span>Excellent</span>
                            </div>
                        </div>
                        <div className="FeaturedPropertiesItem">
                            <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/1f/7e/d1.jpg" alt='image1' className='FeaturedPropertiesImg' />
                            <span className="FeaturedPropertiesName">Mumbai</span>
                            <span className="FeaturedPropertiesCity">thane</span>
                            <span className="FeaturedPropertiesPrice">Starting from Rs.2000</span>
                           <div className="FeaturedPropertiesRating">
                                <button>4.0</button>
                                <span>Excellent</span>
                            </div>
                        </div> */}
        </div>
    )
}

export default FeaturedProperties
