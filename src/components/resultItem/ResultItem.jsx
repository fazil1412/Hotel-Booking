import React from 'react'
import { Link } from 'react-router-dom'
import "./resultItem.css"

const ResultItem = ({item}) => {
    return (
        <div className="resultItem">

            <img src={item.photos[0]}
                alt='Image1'
                className='resultItemImg'
            />

            <div className="resultItemDesc">
                <h1 className="resultItemTitle">{item.name}</h1>
                <span className="resultItemDistance">{item.distance}</span>
                <span className="resultItemTaxi">Free airport taxi</span>
                <span className="resultItemsubtitle">Studio Apartment with Air conditioning</span>
                <span className="resultItemsFeatures">{item.miniDesc}</span>
                <span className="resultItemsCancel">Free cancellation</span>
                <span className="resultItemsCancelSubtitle">You can cancel later, so look in this great price today!</span>
            </div>


            <div className="resultItemsDetails">

                {item.rating && <div className="SearchItemRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}

                <div className="searchDetailsTexts">
                    <span className="searchPrice">Rs.{item.cheapestPrice}</span>
                    <span className="searchTax">Includes taxes and fees</span>

                    <Link to={`/hotels/${item._id}`}>
                    <button className="searchItemCheckButton">See availability</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default ResultItem
