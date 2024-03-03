import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AuthContext";
import { FaUserAlt } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { dispatch, name } = useContext(AppContext);
 
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log(userName,password)
    axios
      .post("http://localhost:5000/api/userlogin", {
        userName,
        password,
      })
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data.user });
        if (res.data.error) {
          // return setError(res.data.error);
          console.log(res.data.error)
        }
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
        <div className="form">
          <h3 className="heading">Login</h3>
          <label className="label">Enter Username</label>
          <input
            type="text"
            className="input"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Email"
          />
          <br></br>
          <label className="label">Enter Password</label>
          <input
            type="Password"
            className="input"
            value={password}
            placeholder=" Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="button"
            className="button"
            value="Login"
            onClick={() => handleClick()}
          />
          <p style={{padding:"0.5rem 0 "}}>
            New Accont <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
  );
};

{
  /* <div className="lContainer">

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
      </div> */
}

export default Login;
