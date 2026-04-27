import React, { useState } from "react";
import { loginCustomer } from "../services/customerService.jsx";
import { loginEmployee } from "../services/employeeService.jsx";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

function Login() {
  const nav = useNavigate();
  const [role, setRole] = useState("customer");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (role === "customer") {
      loginCustomer(identifier, password)
        .then((res) => {
          const customer = res.data;
          if (customer && customer.id) {
            localStorage.setItem("accno", customer.accno);
            localStorage.setItem("customerId", customer.id);
            alert("Login success");
            nav("/dashboard");
          } else {
            alert("Invalid login");
          }
        })
        .catch(() => alert("Login Failed"));

    } else {
      loginEmployee(identifier, password)
        .then((res) => {
          const emp = res.data;
          console.log("Full employee data:", JSON.stringify(emp)); // ✅ debug

          if (emp) {
            const empId = emp.empId || emp.id || emp.employeeId; // ✅ empId first
            localStorage.setItem("employeeId", empId);
            localStorage.setItem("empRole", emp.role);           // ✅ save role
            console.log("Saved employeeId:", empId);
            console.log("Saved role:", emp.role);

            alert("Login Success");

            if (emp.role?.toUpperCase() === "ADMIN") {
              nav("/admindashboard");
            } else {
              nav("/empdashboard");
            }
          } else {
            alert("Invalid Credentials");
          }
        })
        .catch(() => alert("Login Failed"));
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <div className="role-toggle">
        <button
          className={role === "customer" ? "active" : ""}
          onClick={() => { setRole("customer"); setIdentifier(""); }}
        >
          Customer
        </button>
        <button
          className={role === "employee" ? "active" : ""}
          onClick={() => { setRole("employee"); setIdentifier(""); }}
        >
          Employee
        </button>
      </div>

      <input
        type="email"
        placeholder="Email"
        value={identifier}
        onChange={(e) => setIdentifier(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p style={{ marginTop: "15px", textAlign: "center" }}>
        Don't have an account?{" "}
        {role === "customer" ? (
          <Link to="/register">Register as Customer</Link>
        ) : (
          <Link to="/regemp">Register as Employee</Link>
        )}
      </p>
    </div>
  );
}

export default Login;