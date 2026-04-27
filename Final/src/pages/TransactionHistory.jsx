import React, { useState, useEffect } from "react";
import { viewTransactions } from "../services/transactionService.jsx";
import '../App.css';

function TransactionHistory() {
  const [accno, setAccno] = useState("");
  const [data, setData] = useState([]);
  const [searched, setSearched] = useState(false);

  const load = () => {
    if (!accno) return alert("Enter account number");
    viewTransactions(accno)
      .then((res) => {
        setData(res.data);
        setSearched(true);
      })
      .catch(() => {
        alert("No transactions found");
        setData([]);
      });
  };

  return (
    <div className="container">
      <h2>Transaction History</h2>

      <input
        placeholder="Enter Account Number"
        onChange={(e) => setAccno(e.target.value)}
      />
      <button onClick={load}>Load</button>

      {searched && data.length === 0 && <p>No transactions found.</p>}

      {data.length > 0 && (
        <table border="1" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#007bff", color: "white" }}>
              <th>ID</th>
              <th>Type</th>
              <th>Amount (₹)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((t) => (
              <tr key={t.transactionId}>
                <td>{t.transactionId}</td>
                <td>{t.transactionType}</td>
                <td>₹{t.amount}</td>
                <td>{t.transactionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionHistory;