import React, { useState, useEffect } from "react";
import { viewEmployee } from "../services/employeeService.jsx";
import "../App.css";

function EmployeeProfile() {
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    const employeeId = localStorage.getItem("employeeId"); // ✅ Get from localStorage
    console.log("Employee ID from storage:", employeeId);

    if (employeeId) {
      viewEmployee(employeeId)
        .then((res) => {
          setEmp(res.data);
        })
        .catch(() => {
          alert("Employee not found");
        });
    }
  }, []);

  return (
    <div className="container">
      <h2>Employee Profile</h2>
      {emp ? (
        <div style={{ marginTop: "20px" }}>
          <p><b>Name :</b> {emp.empName}</p>
          <p><b>Email :</b> {emp.email}</p>
          <p><b>Phone :</b> {emp.phone}</p>
          <p><b>Role :</b> {emp.role}</p>
          <p><b>Branch :</b> {emp.branchName}</p>
          <p><b>Status :</b> {emp.status}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default EmployeeProfile;