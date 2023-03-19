import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";
import './Login.css';

const Login = () => {
  const [userName,setUserName] = useState("")
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")

const {dispatch,name} = useContext(AppContext)

  const navigate = useNavigate()

  const handleClick = async () => {
   axios.post("http://localhost:5000/api/userlogin",{
    userName,
    password
   })
   .then(res => {
    dispatch({type:"LOGIN",payload:res.data.user})
    if(res.data.error){
      return setError(res.data.error);
    }
    navigate("/")
    console.log(res.data)
   }).catch(err => {
    console.log(err)
   })
  };


  return (
    <div className="login">
      <div className="lContainer">

        <h1 className="heading">Login Form </h1>

        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e)=>setUserName(e.target.value)}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          className="lInput"
        />
        <button  className="lButton" onClick={handleClick}>
          Login
        </button>

      </div>

      <div className="errorMsg">
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Login;
