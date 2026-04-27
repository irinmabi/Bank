import {Link} from "react-router-dom"
import "../App.css"

function EmployeeDashboard(){

return(

<div className="dashboard">

<h2>Employee Dashboard</h2>

<Link to="/customers">View Customers</Link>

<Link to="/pending">Pending Accounts</Link>

<Link to="/transactions">Transaction History</Link>

<Link to="/empprofile">View Profile</Link>

</div>

)

}

export default EmployeeDashboard