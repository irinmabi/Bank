package com.FinalProj.in.Customer.Service;

import java.util.List;

import com.FinalProj.in.Customer.Model.Account;

public interface AccountServices {
	public Account applyAccount(Account account, int customerId);
	public Account checkBalance(long accountNumber);
	Account deposit(long accountNumber, double amount);
	String transfer(long fromAccNo, long toAccNo, double amount);
	Account viewByAccountNumber(long accountNumber);
	List<Account> viewAccountsByCustomer(int customerId);
	Account updateAccount(long accountNumber, Account account);
	 void saveTransaction(Account account, String type, double amount);
}
