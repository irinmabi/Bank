package com.FinalProj.in.Customer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Service.AccountServices;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/account")
public class AccountControl {

    @Autowired
    private AccountServices accountService;

    // Insert account
    @PostMapping("/apply/{customerId}")
    public ResponseEntity<?> applyAccount(@RequestBody Account account,
                                           @PathVariable int customerId) {
        try {
            Account saved = accountService.applyAccount(account, customerId);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body(e.getMessage()); // ✅ returns exact error to browser
        }
    }
    @GetMapping("/balance/{accno}")
    public Account checkBalance(@PathVariable long accno) {
    	return accountService.checkBalance(accno);
    }
    @PutMapping("/deposit/{accNo}/{amount}")
    public Account deposit(@PathVariable long accNo,
                           @PathVariable double amount) {

        return accountService.deposit(accNo, amount);
    }

    // Transfer API
    @PutMapping("/transfer/{from}/{to}/{amount}")
    public String transfer(@PathVariable long from,
                           @PathVariable long to,
                           @PathVariable double amount) {

        return accountService.transfer(from, to, amount);
    }
    // View account by account number
    @GetMapping("/view/{accountNumber}")
    public Account viewAccount(@PathVariable long accountNumber) {
        return accountService.viewByAccountNumber(accountNumber);
    }

    // View all accounts of a customer
    @GetMapping("/customer/{customerId}")
    public List<Account> viewCustomerAccounts(@PathVariable int customerId) {
        return accountService.viewAccountsByCustomer(customerId);
    }

    // Update account
    @PutMapping("/update/{accountNumber}")
    public Account updateAccount(@PathVariable long accountNumber,
                                 @RequestBody Account account) {
        return accountService.updateAccount(accountNumber, account);
    }
}