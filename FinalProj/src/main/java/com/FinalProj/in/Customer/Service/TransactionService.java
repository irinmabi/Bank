package com.FinalProj.in.Customer.Service;

import java.util.List;
import com.FinalProj.in.Customer.Model.Transaction;

public interface TransactionService {

    List<Transaction> viewTransactionHistory(long accountNumber);
    Transaction saveTransaction(Transaction transaction);
    
}