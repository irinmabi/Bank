import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import {registerCustomer} from "../services/customerService.jsx";
import "../App.css";

function Register(){

const [data,setData]=useState({});

// navigation hook
const navigate = useNavigate();

const handleChange=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}

const register=()=>{
registerCustomer(data)
.then(()=>{
alert("Registration successful");

// move to login page
navigate("/dashboard");

})
.catch((err)=>{
console.log(err)
})
}

return(

<div className="container">

<h2>Customer Register</h2>

<input name="name" placeholder="Name" onChange={handleChange}/>
<input name="age" type="number" placeholder="Age" onChange={handleChange}/>
<input name="dob" placeholder="DOB" onChange={handleChange}/>
<input name="address" placeholder="Address" onChange={handleChange}/>
<input name="accno" placeholder="Account No" onChange={handleChange}/>
<input name="phno" placeholder="Phone" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input type="password" name="password" placeholder="Password" onChange={handleChange}/>

<button onClick={register}>Register</button>

</div>

)
}

export default Register