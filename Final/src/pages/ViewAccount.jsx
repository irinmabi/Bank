import React, { useState, useEffect } from "react";
import { getAccountsByCustomerId } from "../services/accountService.jsx";
import '../App.css';

function ViewAccount() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");
    if (customerId) {
      getAccountsByCustomerId(customerId)
        .then((res) => {
          setAccounts(res.data);
        })
        .catch(() => {
          alert("No accounts found for this customer");
        });
    }
  }, []);

  return (
    <div className="container">
      <h2>My Accounts</h2>
      {accounts.length === 0 ? (
        <p>No accounts found.</p>
      ) : (
        accounts.map((account, index) => (
          <div key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "15px", marginTop: "20px" }}>
            <p><b>Account ID :</b> {account.accountId}</p>
            <p><b>Account Number :</b> {account.accountNumber}</p>
            <p><b>Account Type :</b> {account.accountType}</p>
            <p><b>Branch Name :</b> {account.branchName}</p>
            <p><b>Balance :</b> ₹{account.balance}</p>
            <p><b>Status :</b> {account.accountStatus}</p>
            <p><b>Created Date :</b> {account.createdDate}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewAccount;