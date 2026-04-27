package com.FinalProj.in.Customer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Customer.Service.TransactionService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/transaction")
public class TransactionControl {

    @Autowired
    private TransactionService transactionService;
    
    @PostMapping("/save")
    public Transaction saveTransaction(@RequestBody Transaction transaction) {

        return transactionService.saveTransaction(transaction);
    }

    @GetMapping("/history/{accNo}")
    public List<Transaction> viewHistory(@PathVariable long accNo) {

        return transactionService.viewTransactionHistory(accNo);
    }
}