import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

function UpdateEmployee(){

const {id} = useParams();
const navigate = useNavigate();

const [employee,setEmployee] = useState({
empName:"",
email:"",
phone:"",
role:"",
branchName:"",
status:""
})

useEffect(()=>{
AdminService.getEmployeeById(id).then((res)=>{
setEmployee(res.data);
})
},[id])

const handleChange = (e)=>{
setEmployee({...employee,[e.target.name]:e.target.value})
}

const updateEmployee = (e)=>{
e.preventDefault();

AdminService.updateEmployee(id,employee).then(()=>{
navigate("/employees");
})
}

return(

<div className="container">

<h2>Update Employee</h2>

<form onSubmit={updateEmployee}>

<input
type="text"
name="empName"
value={employee.empName}
onChange={handleChange}
placeholder="Employee Name"
/>

<input
type="email"
name="email"
value={employee.email}
onChange={handleChange}
placeholder="Email"
/>

<input
type="text"
name="phone"
value={employee.phone}
onChange={handleChange}
placeholder="Phone"
/>

<input
type="text"
name="role"
value={employee.role}
onChange={handleChange}
placeholder="Role"
/>

<input
type="text"
name="branchName"
value={employee.branchName}
onChange={handleChange}
placeholder="Branch"
/>

<input
type="text"
name="status"
value={employee.status}
onChange={handleChange}
placeholder="Status"
/>

<button type="submit">Update</button>

</form>

</div>

)

}

export default UpdateEmployee;