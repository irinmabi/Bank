import React,{useState} from "react"
import {loginEmployee} from "../services/employeeService.jsx"
import {useNavigate} from "react-router-dom"
import "../App.css"

function EmployeeLogin(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()

const login=()=>{

loginEmployee(email,password)
.then(res=>{

console.log(res.data)

const emp = res.data

if(emp){

console.log("Role:", emp.role)
alert("Login Success")

// ROLE CHECK
if(emp.role?.toUpperCase() === "ADMIN"){
navigate("/admindashboard")
}
else{
navigate("/empdashboard")
}

}
else{
alert("Invalid Credentials")
}

})
.catch(()=>{
alert("Login Failed")
})

}

return(

<div className="container">

<h2>Employee Login</h2>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={login}>Login</button>

</div>

)

}

export default EmployeeLogin