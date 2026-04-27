import React, { useState, useEffect } from "react";
import { viewCustomer } from "../services/customerService.jsx";
import '../App.css';

function Profile() {

  const [customer, setCustomer] = useState(null);

  useEffect(() => {

    const customerId = localStorage.getItem("customerId"); // ✅ use customerId instead of accno
    console.log("Customer ID from storage:", customerId);

    if (customerId) {
      viewCustomer(customerId)
        .then((res) => {
          setCustomer(res.data);
        })
        .catch(() => {
          alert("Customer not found");
        });
    }

  }, []);

  return (
    <div className="container">
      <h2>Customer Profile</h2>

      {customer && (
        <div style={{ marginTop: "20px" }}>
          <p><b>ID :</b> {customer.id}</p>
          <p><b>Name :</b> {customer.name}</p>
          <p><b>Age :</b> {customer.age}</p>
          <p><b>DOB :</b> {customer.dob}</p>
          <p><b>Address :</b> {customer.address}</p>
          <p><b>Account No :</b> {customer.accno}</p>
          <p><b>Phone :</b> {customer.phno}</p>
          <p><b>Email :</b> {customer.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;