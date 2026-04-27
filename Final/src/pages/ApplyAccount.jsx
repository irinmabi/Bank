import React, { useState, useEffect } from "react"
import { applyAccount } from "../services/accountService.jsx"
import '../App.css';

function ApplyAccount() {
  const [data, setData] = useState({})
  const [id, setId] = useState("")

  useEffect(() => {
    const customerId = localStorage.getItem("customerId")
    if (customerId) setId(customerId)
  }, [])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const apply = () => {
    if (!data.accountType) {
      alert("Please select an account type")
      return
    }
    if (!data.branchName) {
      alert("Please enter branch name")
      return
    }

    applyAccount(data, id)
      .then(() => {
        alert("Account request sent successfully")
      })
      .catch((err) => {
        alert("Failed: " + (err.response?.data || "Server error"))  // ✅ shows exact error
      })
  }

  return (
    <div className="container">
      <h2>Apply Account</h2>

      <input
        placeholder="Customer ID"
        value={id}
        readOnly
      />

      <select name="accountType" onChange={handleChange}>
        <option value="">-- Select Account Type --</option>
        <option value="SAVINGS">Savings</option>
        <option value="CURRENT">Current</option>
        <option value="SALARY">Salary</option>
        <option value="FIXED_DEPOSIT">Fixed Deposit</option>
        <option value="RECURRING_DEPOSIT">Recurring Deposit</option>
      </select>

      <input
        name="branchName"
        placeholder="Branch Name"
        onChange={handleChange}
      />

      <button onClick={apply}>Apply</button>
    </div>
  )
}

export default ApplyAccount