import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";



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
    <div className='formCont'>
          <div className='form-cont'>
          <h3 className='Title'>SignUp</h3>
           
           <div className='input_field'>
           <label className='label'> Name</label><br/>
           <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value)} className='inputUser' placeholder="First Name"/>
           </div>
                
           <div className='input_field'>
           <label className='label'>UserName</label><br/>
           <input type="text"name="userName" value={userName} onChange={(e) => setUserName(e.target.value)}  className='inputUser' placeholder="Last Name"/>
           </div>
          
           <div className='input_field'>
          <label className='label'>Password</label><br/>
           <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='inputUser' placeholder="Email"/>
           </div>
             
           <div className='input_field'>
           <label className='label'>Confirm Password</label><br/>
           <input type="text" name="cPassword" value={cPassword} onChange={(e) => setCpassword(e.target.value)}  className='inputUser' placeholder="+91 1234 5678 90"/>
           </div>
                  
           <div className='input_field'>
           <label className='label'>phone</label><br/>
           <input type="number" name="phone" value={phone} onChange={(e) =>setPhone(e.target.value)}  className='inputUser' placeholder="+91 7894 5612 20"/>
           </div>
           
           <div className='input_field'>
           <label className='label'>City</label><br/>
           <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} className='inputUser' placeholder="City"/>
           </div>

           <div className='input_field'>
           <label className='label'>Email</label><br/>
           <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='inputUser' placeholder="City"/>
           </div>

           <input type="button" className='buttonbtn' value="Sign Up" onClick={handleClick}/>
           <p>Already Have an account  <Link to="/login">Sign in</Link></p>
       
          </div>

        </div>
  );
};

export default Register;
