import React, { useContext, useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays,faHotel ,faCar, faPerson, faPlane, faTaxi,faHouseBuilding } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom';



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

                    <div className="headerListItem">
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

                </div>

                {type !== "list" &&
                    <>
                        <h1 className="headerTitle"> Your Happiness is Our Priority</h1>
                        <p className="headerDesc">We Bring you Premium Star Utilitiesat the Cheapest Price</p>
                        

                        <div className="headerSearch">

                            {/* 1) Destination */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder='Where are you going ?' className='headerSearchInput'
                                    onChange={(event) => setDestination(event.target.value)}
                                    value={Destination}
                                />
                            </div>


                            {/* 2) Date */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>

                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDates([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dates}
                                    className="date"
                                    minDate={new Date()}
                                />}
                            </div>


                            {/* 3) Select */}
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span onClick={() => setOption(!openOption)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

                                {openOption && <div className="options">

                                    {/*  3.A) Adult */}

                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult < 1}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>


                                    {/* 3.B) Children */}

                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children < 1}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>


                                    {/* 3.C) Room */}

                                    <div className="optionItem">
                                        <span className="optionText">Room</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room < 1}>-</button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>


                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button className='headerButton' onClick={HandleSearch}>Search</button>
                            </div>

                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Header

