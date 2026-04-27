package com.FinalProj.in.Customer.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Customer.Repository.AccountRepo;
import com.FinalProj.in.Customer.Repository.CustomRepo;
import com.FinalProj.in.Customer.Repository.TransactionRepo;

import jakarta.transaction.Transactional;

@Service
public class AccountImpl implements AccountServices {

    @Autowired
    private AccountRepo accountRepo;

    @Autowired
    private CustomRepo customRepo;

    @Autowired
    private TransactionRepo transactionRepo; // ✅ Added

    // ✅ Save Transaction (no private)
    @Override
    public void saveTransaction(Account account, String type, double amount) {
        Transaction t = new Transaction();
        t.setAccount(account);
        t.setTransactionType(type);
        t.setAmount(amount);
        t.setTransactionDate(LocalDate.now());
        transactionRepo.save(t);
    }

    // Apply for Account
    @Override
    public Account applyAccount(Account account, int customerId) {
        Custom customer = customRepo.findById(customerId)
            .orElseThrow(() -> new RuntimeException("Customer not found: " + customerId));

        account.setCustomer(customer);
        account.setAccountStatus("PENDING");
        account.setBalance(0.0);
        account.setCreatedDate(LocalDate.now());
        account.setAccountNumber(System.currentTimeMillis());

        return accountRepo.save(account);
    }

    // Check Balance
    @Override
    public Account checkBalance(long accountNumber) {
        Account acc = accountRepo.findByAccountNumber(accountNumber);
        if (acc != null) {
            return acc;
        } else {
            throw new RuntimeException("Account not found!");
        }
    }

    // Deposit ✅ saves transaction
    @Override
    public Account deposit(long accountNumber, double amount) {
        Account acc = accountRepo.findByAccountNumber(accountNumber);

        if (acc == null) {
            throw new RuntimeException("Account not found");
        } else if (amount <= 0) {
            throw new RuntimeException("Invalid amount");
        }

        acc.setBalance(acc.getBalance() + amount);
        Account saved = accountRepo.save(acc);

        saveTransaction(saved, "DEPOSIT", amount); // ✅

        return saved;
    }

    // Transfer ✅ saves transaction for both accounts
    @Override
    @Transactional
    public String transfer(long fromAccNo, long toAccNo, double amount) {
        Account fromAccount = accountRepo.findByAccountNumber(fromAccNo);
        Account toAccount = accountRepo.findByAccountNumber(toAccNo);

        if (fromAccount == null || toAccount == null) {
            return "One or both accounts not found";
        }

        if (amount <= 0) {
            return "Invalid transfer amount";
        }

        if (fromAccount.getBalance() < amount) {
            return "Insufficient Balance";
        }

        fromAccount.setBalance(fromAccount.getBalance() - amount);
        toAccount.setBalance(toAccount.getBalance() + amount);

        accountRepo.save(fromAccount);
        accountRepo.save(toAccount);

        saveTransaction(fromAccount, "TRANSFER OUT", amount); // ✅
        saveTransaction(toAccount, "TRANSFER IN", amount);   // ✅

        return "Transfer Successful";
    }

    // View account by account number
    @Override
    public Account viewByAccountNumber(long accountNumber) {
        Account account = accountRepo.findByAccountNumber(accountNumber);

        if (account == null) {
            throw new RuntimeException("Account not found");
        }

        return account;
    }

    // View all accounts of a customer
    @Override
    public List<Account> viewAccountsByCustomer(int customerId) {
        List<Account> list = accountRepo.findByCustomer_Id(customerId);

        if (list.isEmpty()) {
            throw new RuntimeException("No accounts found for this customer");
        }

        return list;
    }

    // Update account
    @Override
    public Account updateAccount(long accountNumber, Account account) {
        Account existing = accountRepo.findByAccountNumber(accountNumber);

        if (existing == null) {
            throw new RuntimeException("Account not found");
        }

        existing.setAccountType(account.getAccountType());
        existing.setBranchName(account.getBranchName());
        existing.setAccountStatus(account.getAccountStatus());

        return accountRepo.save(existing);
    }
}