package com.FinalProj.in.Admin.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Customer.Repository.AccountRepo;
import com.FinalProj.in.Customer.Repository.TransactionRepo;
import com.FinalProj.in.Employee.Model.Employee;
import com.FinalProj.in.Employee.Repository.EmpRepo;

@Service
public class AdminImpl implements AdminService {

    @Autowired
    private EmpRepo employeeRepo;
    @Autowired
    private AccountRepo accountRepo;
    @Autowired
    private TransactionRepo transactionRepo;

    //  View all employees
    @Override
    public List<Employee> viewAllEmployees() {
        return employeeRepo.findAll();
    }

    // View employee by ID
    @Override
    public Employee viewEmployeeById(int empId) {

        Employee emp = employeeRepo.findByEmpId(empId);

        if (emp == null) {
            throw new RuntimeException("Employee not found");
        }

        return emp;
    }

    // Update employee
    @Override
    public Employee updateEmployee(int empId, Employee employee) {

        Employee existing = employeeRepo.findByEmpId(empId);

        if (existing == null) {
            throw new RuntimeException("Employee not found");
        }

        existing.setEmpName(employee.getEmpName());
        existing.setEmail(employee.getEmail());
        existing.setPhone(employee.getPhone());
        existing.setRole(employee.getRole());
        existing.setBranchName(employee.getBranchName());
        existing.setStatus(employee.getStatus());

        return employeeRepo.save(existing);
    }

    // Delete employee
    @Override
    public String deleteEmployee(int empId) {

        Employee emp = employeeRepo.findByEmpId(empId);

        if (emp == null) {
            throw new RuntimeException("Employee not found");
        }

        employeeRepo.delete(emp);

        return "Employee deleted successfully";
    }
    public List<Account> viewAllCustomerAccounts() {

        List<Account> list = accountRepo.findAll();

        if (list.isEmpty()) {
            throw new RuntimeException("No accounts found");
        }

        return list;
    }
    @Override
    public List<Transaction> viewAllTransactions() {

        List<Transaction> list = transactionRepo.findAll();

        if (list.isEmpty()) {
            throw new RuntimeException("No transactions found");
        }

        return list;
    }
}