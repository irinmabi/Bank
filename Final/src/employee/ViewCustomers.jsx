import React,{useEffect,useState} from "react"
import {viewCustomers,deleteCustomer} from "../services/employeeService.jsx"
import "../App.css"

function ViewCustomers(){

const [customers,setCustomers]=useState([])

useEffect(()=>{

viewCustomers().then(res=>{
setCustomers(res.data)
})

},[])

const remove=(id)=>{

deleteCustomer(id)
.then(()=>{
alert("Customer Deleted")
window.location.reload()
})

}

return(

<div className="container">

<h2>Customers</h2>
<div className="table-container">
<table>

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{customers.map(c=>(
<tr key={c.id}>
<td>{c.id}</td>
<td>{c.name}</td>
<td>{c.email}</td>
<td>{c.phno}</td>

<td>
<button onClick={()=>remove(c.id)}>Delete</button>
</td>

</tr>
))}

</tbody>

</table>
</div>
</div>

)

}

export default ViewCustomers
