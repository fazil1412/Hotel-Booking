import React, { useContext, useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays,faHotel ,faCar, faPerson, faPlane, faTaxi,faHouseBuilding } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Header({ type }) {



    // useState for Date
    const [Destination, setDestination] = useState("")



    // useState & Extand for Date
    const [openDate, setOpenDate] = useState(false)

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);



    // useState & Extand for Select
    const [openOption, setOption] = useState(false)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })


    // Counting for select Item
    const handleOption = (name, operation) => {
        setOptions((prevState) => {
            return {
                ...prevState,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }



    // Navigation use for React-router-dom
    const navigate = useNavigate()

    const HandleSearch = () => {

        navigate("/hotels", { state: { Destination, dates, options } })
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>

                <div className="headerList">

                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Home</span>
                    </div>

                        
                    <div className="headerListItem" onClick={() => navigate("/allhotels")}>
                      <FontAwesomeIcon icon={faHotel} />
                       <span>Hotels</span>
                    </div>
                       

                    <div className="headerListItem">
                    <FontAwesomeIcon icon="fa-sharp fa-solid fa-house-building" />
                        <span>Apartments</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>villas</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Resorts</span>
                    </div>

                    <div className="headerListItem" onClick={() => navigate("/listbrooms")}>
                        <FontAwesomeIcon icon={faTaxi}  />
                        <span>Bookings</span>
                    </div>

                </div>

                {type !== "list" &&
                    <>
                        <h1 className="headerTitle"> Your Happiness is Our Priority</h1>
                        <p className="headerDesc">We Bring you Premium Star Utilitiesat the Cheapest Price</p>
                        

                       

                      
                    </>
                }
            </div>
        </div>
    )
}

export default Header

