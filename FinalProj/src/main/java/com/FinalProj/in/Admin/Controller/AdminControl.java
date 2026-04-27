package com.FinalProj.in.Admin.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinalProj.in.Admin.Service.AdminService;
import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Employee.Model.Employee;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/admin")
public class AdminControl {

    @Autowired
    private AdminService adminService;

    //  View all employees
    @GetMapping("/employees")
    public List<Employee> viewAllEmployees() {
        return adminService.viewAllEmployees();
    }

    // View employee by ID
    @GetMapping("/employee/{empId}")
    public Employee viewEmployee(@PathVariable int empId) {
        return adminService.viewEmployeeById(empId);
    }

    // Update employee
    @PutMapping("/employee/update/{empId}")
    public Employee updateEmployee(@PathVariable int empId,
                                   @RequestBody Employee employee) {
        return adminService.updateEmployee(empId, employee);
    }

    // Delete employee
    @DeleteMapping("/employee/delete/{empId}")
    public String deleteEmployee(@PathVariable int empId) {
        return adminService.deleteEmployee(empId);
    }
    @GetMapping("/accounts")
    public List<Account> viewAllAccounts() {
        return adminService.viewAllCustomerAccounts();
    }
    
    @GetMapping("/transactions")
    public List<Transaction> viewAllTransactions() {
        return adminService.viewAllTransactions();
    }
}