import React,{useState} from "react"
import {registerEmployee} from "../services/employeeService.jsx"
import {useNavigate} from "react-router-dom"
import "../App.css"

function EmployeeRegister(){

const navigate = useNavigate()

const [emp,setEmp]=useState({
 empName:"",
 email:"",
 phone:"",
 password:"",
 role:"",
 branchName:"",
 joiningDate:"",
 status:""
})

const handleChange=(e)=>{
setEmp({...emp,[e.target.name]:e.target.value})
}

const register=()=>{

console.log(emp)

registerEmployee(emp)
.then(()=>{
alert("Employee Registered")

navigate("/empdashboard")

})
.catch((err)=>{
console.log(err)
alert("Registration Failed")
})

}

return(

<div className="container">

<h2>Employee Register</h2>

<input name="empName" placeholder="Name" onChange={handleChange}/>
<input name="email" placeholder="Email" onChange={handleChange}/>
<input name="phone" placeholder="Phone" onChange={handleChange}/>
<input name="password" type="password" placeholder="Password" onChange={handleChange}/>
<input name="role" placeholder="Role" onChange={handleChange}/>
<select name="accountType" onChange={handleChange}>
        <option value="">-- Select Type --</option>
        <option value="Manager">Manager</option>
        <option value="Staff">Staff</option>
        <option value="Admin">Admin</option>
       
      </select>
<input name="branchName" placeholder="Branch" onChange={handleChange}/>
<input name="joiningDate" type="date" onChange={handleChange}/>
<input name="status" placeholder="Status" onChange={handleChange}/>

<button onClick={register}>Register</button>

</div>

)

}

export default EmployeeRegister