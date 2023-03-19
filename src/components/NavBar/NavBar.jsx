
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './navBar.css'
import { Link } from "react-router-dom"
import { AppContext } from './../../context/AuthContext';


function NavBar() {
    const {dispatch,user} = useContext(AppContext)
    const navigate = useNavigate()


    const handleClick = () => {
        dispatch({type:"LOGOUT"})
    };

    return (
        <div className="navBar">
            <div className="navContainer">
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className="logo"> -Trippy Boo<span className='spanClass'>king</span> ✈️-</span>
                </Link>

                 {
                    user._id 
                    &&
                    <div>
                        <span className="navButton">{user.userName}</span>

                        <button className="navButton" disabled={false} onClick={handleClick} >Logout</button>
                    </div>
                 }


{!user._id &&
     <div className="navItem">
     <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
         <button className="navButton">Register</button>
     </Link>

     <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
         <button className="navButton">Login</button>
     </Link>
 </div>
}
                   
                

            </div>
        </div>
    )
}

export default NavBar
