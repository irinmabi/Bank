package com.FinalProj.in.Admin.Service;

import java.util.List;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Employee.Model.Employee;

public interface AdminService {

    List<Employee> viewAllEmployees();
    Employee viewEmployeeById(int empId);
    Employee updateEmployee(int empId, Employee employee);
    String deleteEmployee(int empId);
    List<Account> viewAllCustomerAccounts();
    List<Transaction> viewAllTransactions();
}