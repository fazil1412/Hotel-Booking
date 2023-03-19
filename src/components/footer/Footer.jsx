import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLists">
                <ul className="footerList">
                    <li className="listItem">Countries</li>
                    <li className="listItem">Regions</li>
                    <li className="listItem">Cites</li>
                    <li className="listItem">Districts</li>
                    <li className="listItem">Airports</li>
                    <li className="listItem">Hotels</li>
                </ul>

                <ul className="footerList">
                    <li className="listItem">Homes</li>
                    <li className="listItem">Apartments</li>
                    <li className="listItem">Resorts</li>
                    <li className="listItem">Villas</li>
                    <li className="listItem">Hostels</li>
                    <li className="listItem">Guest houses</li>
                </ul>

                <ul className="footerList">
                    <li className="listItem">Unique places to stay</li>
                    <li className="listItem">All destinations</li>
                    <li className="listItem">All flight destinations</li>
                    <li className="listItem">Reviews</li>
                    <li className="listItem">Unpacked: Travel articles</li>
                    <li className="listItem">Travel communities</li>
                </ul>

                <ul className="footerList">
                    <li className="listItem">Car rental</li>
                    <li className="listItem">Flight finder</li>
                    <li className="listItem">Restaurant reservations</li>
                    <li className="listItem">Booking.com for Travel Agents</li>
                </ul>

                <ul className="footerList">
                    <li className="listItem">Careers</li>
                    <li className="listItem">Sustainability</li>
                    <li className="listItem">Partner help</li>
                    <li className="listItem">Press Center</li>
                    <li className="listItem">Safety Resource Center</li>
                    <li className="listItem">Terms & Conditions</li>
                </ul>
            </div>
            
            <div className="footerText">
                <span>Copyright © 2022–2023 TRIPPY BOOKING.Com™. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
