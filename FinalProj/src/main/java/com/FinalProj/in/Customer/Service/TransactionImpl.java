package com.FinalProj.in.Customer.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Customer.Repository.TransactionRepo;

@Service
public class TransactionImpl implements TransactionService {

    @Autowired
    private TransactionRepo transactionRepo;
    
    @Override
    public Transaction saveTransaction(Transaction transaction) {

        return transactionRepo.save(transaction);
    }

    @Override
    public List<Transaction> viewTransactionHistory(long accountNumber) {

        return transactionRepo.findByAccountAccountNumber(accountNumber);
    }
}