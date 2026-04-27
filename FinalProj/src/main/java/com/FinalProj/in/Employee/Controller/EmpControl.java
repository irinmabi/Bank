package com.FinalProj.in.Employee.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Employee.Model.Employee;
import com.FinalProj.in.Employee.Service.EmpService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/employee")
public class EmpControl {
@Autowired
private EmpService empService;

@PostMapping("/regemp")
public Employee regEmp(@RequestBody Employee e) {
	return empService.regEmp(e);
}

@PostMapping("/loginemp")
public Employee loginEmp(@RequestBody Employee e) {

    Employee emp = empService.loginEmp(e.getEmail(), e.getPassword());

    return emp;   // return employee object
}

@GetMapping("/view/{empId}")
public Employee viewById(@PathVariable int empId) {
	
	return empService.viewById(empId);
}


@GetMapping("/customers")
	public List<Custom> ViewAllCustomers(){
	
       return empService.viewAllCustomers();
		
	}
@DeleteMapping("/delete/{id}")
public List<Custom> deleteStudent(@PathVariable int id) {

	return empService.removeCustom(id);
}

//@DeleteMapping("/delete/{id}")
//public Custom deleteCustomer(@PathVariable int id) {
//    return empService.removeCustom(id);
//}

//update customer
@PutMapping("/updatecustom")
public Custom UpdateCustom(@RequestBody Custom c) {
	return empService.updateCustom(c);
}

//  View all pending accounts
@GetMapping("/pending")
public List<Account> getPendingAccounts() {
    return empService.viewPendingAccounts();
}

// Approve account
@PutMapping("/approve/{id}")
public Account approveAccount(@PathVariable int id) {
    return empService.approveAccount(id);
}

// Reject account
@PutMapping("/reject/{id}")
public Account rejectAccount(@PathVariable int id) {
    return empService.rejectAccount(id);
}

@GetMapping("/transactions/{accNo}")
public List<Transaction> viewTransactions(@PathVariable long accNo) {

    return empService.viewTransactionHistory(accNo);
}


}
