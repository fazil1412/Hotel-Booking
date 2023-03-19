import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';



const Register = () => {
  const [name,setName] = useState("")
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("")
  const [cPassword,setCpassword] = useState("")
  const [email,setEmail] = useState("")
  const [city,setCity] = useState("")
  const [phone,setPhone] = useState("")

  const navigate = useNavigate()
  
  const handleClick = () => {
    axios.post("http://localhost:5000/api/usersignup",{
      name,
      userName,
      email,
      password,
      cPassword,
      city,
      phone
    }).then(res => {
      console.log(res.data)
      if(res.data.newUser){
        navigate("/login")
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="login">
      <div className="lContainer">
        <h1 className="heading">Register Form</h1>



        <input type="text" placeholder="Enter Name" id="username" onChange={(e)=>setName(e.target.value)} className="lInput" required />
        <input type="text" placeholder="username" id="username" onChange={(e)=>setUserName(e.target.value)} className="lInput" required />

        <input type="email" placeholder="Email" id="email" onChange={(e)=>setEmail(e.target.value)} className="lInput" required />

        {/* <input type="text" placeholder="country" id="country" onChange={()=>} className="lInput" required /> */}

        <input type="text" placeholder="city" id="city" onChange={(e)=>setCity(e.target.value)} className="lInput" required />

        <input type="text" placeholder="phone" id="phone" onChange={(e)=>setPhone(e.target.value)} className="lInput" required />

        <input type="password" placeholder="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="lInput" required />
        <input type="text" placeholder="Confirm password" id="password" onChange={(e)=>setCpassword(e.target.value)} className="lInput" required />

        <button onClick={handleClick} className="lButton">
          Resgister
        </button>


      </div>
      <div className="errorMsg">
        {/* {error && <span>{error.message}</span>} */}
      </div>

    </div>
  );
};

export default Register;
