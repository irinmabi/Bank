import React,{useState} from "react"
import {viewTransactions} from "../services/employeeService.jsx"
import "../App.css"

function CustomTransaction(){

const [accNo,setAccNo]=useState("")
const [transactions,setTransactions]=useState([])

const search=()=>{

viewTransactions(accNo).then(res=>{
setTransactions(res.data)
})

}

return(

<div className="container">

<h2>Transaction History</h2>

<input placeholder="Account Number" onChange={(e)=>setAccNo(e.target.value)}/>

<button onClick={search}>Search</button>

<table>

<thead>
<tr>
<th>ID</th>
<th>Type</th>
<th>Amount</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{transactions.map(t=>(

<tr key={t.transactionId}>

<td>{t.transactionId}</td>
<td>{t.transactionType}</td>
<td>{t.amount}</td>
<td>{t.transactionDate}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default CustomTransaction