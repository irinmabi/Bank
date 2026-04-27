import {Link} from "react-router-dom"
import "../App.css";

function Dashboard(){

return(

<div className="dashboard">

<h2>Customer Dashboard</h2>

<Link to="/profile">View Profile</Link>
<br/>

<Link to="/apply">Apply Account</Link>
<br/>
<Link to="/account">View Account</Link>
<br/>

{/* <Link to="/balance">Check Balance</Link>
<br/> */}

<Link to="/deposit">Deposit</Link>
<br/>

<Link to="/transfer">Transfer</Link>
<br/>



<Link to="/transactions">Transactions</Link>

</div>

)

}

export default Dashboard