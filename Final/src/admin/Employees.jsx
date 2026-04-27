import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService.jsx";

function Employees(){

const [employees,setEmployees] = useState([]);
const navigate = useNavigate();

useEffect(()=>{
loadEmployees();
},[])

const loadEmployees = ()=>{
AdminService.getEmployees().then((res)=>{
setEmployees(res.data);
})
}

const deleteEmployee = (id)=>{
AdminService.deleteEmployee(id).then(()=>{
loadEmployees();
})
}

return(

<div className="container">

<h2>Employee List</h2>

<div className="table-container">

<table>

<thead>

<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Role</th>
<th>Branch</th>
<th>Status</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{
employees.map(emp=>(
<tr key={emp.empId}>

<td>{emp.empId}</td>
<td>{emp.empName}</td>
<td>{emp.email}</td>
<td>{emp.phone}</td>
<td>{emp.role}</td>
<td>{emp.branchName}</td>
<td>{emp.status}</td>

<td>

<button onClick={()=>navigate(`/update/${emp.empId}`)}>
Update
</button>

<button onClick={()=>deleteEmployee(emp.empId)}>
Delete
</button>

</td>

</tr>
))
}

</tbody>

</table>

</div>

</div>

)

}

export default Employees;