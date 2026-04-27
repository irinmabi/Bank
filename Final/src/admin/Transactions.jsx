import { useEffect,useState } from "react";
import AdminService from "../services/AdminService.jsx";

function Transactions(){

const [transactions,setTransactions] = useState([]);

useEffect(()=>{
AdminService.getTransactions().then((res)=>{
setTransactions(res.data);
})
},[])

return(

<div className="container">

<h2>Transactions</h2>

<div className="table-container">

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

{
transactions.map(t=>(
<tr key={t.transactionId}>
<td>{t.transactionId}</td>
<td>{t.transactionType}</td>
<td>{t.amount}</td>
<td>{t.transactionDate}</td>
</tr>
))
}

</tbody>

</table>

</div>

</div>

)

}

export default Transactions;