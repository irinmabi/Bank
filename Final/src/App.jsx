import {BrowserRouter,Routes,Route} from "react-router-dom"

import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import ApplyAccount from "./pages/ApplyAccount.jsx"
import CheckBalance from "./pages/CheckBalance.jsx"
import Deposit from "./pages/Deposit.jsx"
import Transfer from "./pages/Transfer.jsx"
import TransactionHistory from "./pages/TransactionHistory.jsx"
import Profile from "./pages/Profile.jsx";
import ViewAccount from "./pages/ViewAccount.jsx";

import EmployeeRegister from "./employee/EmployeeRegister.jsx"
import EmployeeLogin from "./employee/EmployeeLogin.jsx"
import EmployeeDashboard from "./employee/EmployeeDashboard.jsx"
import ViewCustomers from "./employee/ViewCustomers.jsx"
import PendingAccounts from "./employee/PendingAccounts.jsx"
import CustomTransaction from "./employee/CustomTransaction.jsx"
import EmployeeProfile from "./employee/EmployeeProfile.jsx"

import Employees from "./admin/Employees.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import UpdateEmployee from "./admin/UpdateEmployee.jsx";
import Accounts from "./admin/Accounts.jsx";
import Transactions from "./admin/Transactions.jsx";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/apply" element={<ApplyAccount/>}/>
<Route path="/balance" element={<CheckBalance/>}/>
<Route path="/deposit" element={<Deposit/>}/>
<Route path="/transfer" element={<Transfer/>}/>
<Route path="/transactions" element={<TransactionHistory/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/account" element={<ViewAccount/>}/>

<Route path="/regemp" element={<EmployeeRegister/>}/>
<Route path="/emplogin" element={<EmployeeLogin/>}/>
<Route path="/empdashboard" element={<EmployeeDashboard/>}/>
<Route path="/customers" element={<ViewCustomers/>}/>
<Route path="/pending" element={<PendingAccounts/>}/>
<Route path="/customtransactions" element={<CustomTransaction/>}/>
<Route path="/empprofile" element={<EmployeeProfile/>}/>

 <Route path="/admindashboard" element={<AdminDashboard />} />
<Route path="/employees" element={<Employees/>} />
<Route path="/update/:id" element={<UpdateEmployee/>} />
<Route path="/adminaccountview" element={<Accounts/>} />
<Route path="/admintransactions" element={<Transactions/>} />

</Routes>

</BrowserRouter>

)

}

export default App