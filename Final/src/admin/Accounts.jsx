import { useEffect,useState } from "react";
import AdminService from "../services/AdminService.jsx";

function Accounts(){

const [accounts,setAccounts] = useState([]);

useEffect(()=>{
AdminService.getAccounts().then((res)=>{
setAccounts(res.data);
})
},[])

return(

<div className="container">

<h2>Customer Accounts</h2>

<div className="table-container">

<table>

<thead>

<tr>
<th>Account Number</th>
<th>Balance</th>
</tr>

</thead>

<tbody>

{
accounts.map(acc=>(
<tr key={acc.accountNumber}>
<td>{acc.accountNumber}</td>
<td>{acc.balance}</td>
</tr>
))
}

</tbody>

</table>

</div>

</div>

)

}

export default Accounts;