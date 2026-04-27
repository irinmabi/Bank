import React,{useEffect,useState} from "react"
import {pendingAccounts,approveAccount,rejectAccount} from "../services/employeeService.jsx"
import "../App.css"

function PendingAccounts(){

const [accounts,setAccounts]=useState([])

useEffect(()=>{

pendingAccounts().then(res=>{
setAccounts(res.data)
})

},[])

const approve=(id)=>{
approveAccount(id).then(()=>{
alert("Account Approved")
window.location.reload()
})
}

const reject=(id)=>{
rejectAccount(id).then(()=>{
alert("Account Rejected")
window.location.reload()
})
}

return(

<div className="container">

<h2>Pending Accounts</h2>

<table>

<thead>
<tr>
<th>ID</th>
<th>Account No</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{accounts.map(a=>(

<tr key={a.accountId}>

<td>{a.accountId}</td>
<td>{a.accountNumber}</td>
<td>{a.accountStatus}</td>

<td>

<button onClick={()=>approve(a.accountId)}>Approve</button>

<button onClick={()=>reject(a.accountId)}>Reject</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default PendingAccounts