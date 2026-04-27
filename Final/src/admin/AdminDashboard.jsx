import { Link } from "react-router-dom";

function AdminDashboard(){

return(

<div className="dashboard">

<h2>Admin Dashboard</h2>

<Link to="/employees">View Employees</Link>

<Link to="/adminaccountview">Customer Accounts</Link>

<Link to="/transactions">Transactions</Link>

</div>

)

}

export default AdminDashboard;