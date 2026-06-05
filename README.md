# 🏦 Bank Management System

A full-stack Bank Management System built with **React** (Frontend) and **Java** (Backend), designed to manage banking operations efficiently through a secure and transparent platform.

**Developed by:** Irin Mariyam Abi  
**Date:** 20/02/2026

---

## 📁 Project Structure

Bank/
├── Final/        # Frontend - React
└── FinalProj/    # Backend - Java
---

## 📌 Modules

### 👨‍💼 Admin
- Add, update, and delete bank employees
- View all customer accounts
- Monitor all transactions (deposit, withdrawal, transfer)
- Approve or reject loan requests
- Generate financial reports
- Manage branch details
- View total bank balance and profit reports
- Freeze or activate customer accounts
- View system logs and activity history

### 👨‍💻 Bank Staff (Employee)
- Register new customers
- Open new bank accounts (Savings / Current / Fixed Deposit)
- Update customer details
- Deposit and withdraw money
- Process money transfers
- View customer transaction history
- Accept and forward loan applications
- Close customer accounts (with admin approval)
- View self-details

### 👤 Customer
- Register and login securely
- View account details and balance
- Deposit, withdraw, and transfer money
- View transaction history
- Apply for loans and track loan status (Approved / Rejected / Pending)
- Update personal details and change password
- View profile details

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, HTML, CSS |
| Backend | Java |
| Database | MySQL |

---

## 🚀 Getting Started

### Frontend (React)
```bash
cd Final
npm install
npm start
```
Visit `http://localhost:3000` in your browser.

### Backend (Java)
```bash
cd FinalProj
mvn spring-boot:run
```
API runs at `http://localhost:8080`.

---

## 🔐 Security
- Role-based access control for Admin, Staff, and Customer
- Secure login and password management
- Transaction monitoring and system activity logs

---

## 📄 License
This project was developed for academic purposes.  
© 2026 Irin Mariyam Abi. All rights reserved.
