package com.FinalProj.in.Employee.Service;

import java.util.List;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Employee.Model.Employee;

public interface EmpService {
	 public Employee regEmp(Employee e);
	  public Employee loginEmp(String email, String password);
	  public Employee viewById(int  empId);
//	 public Custom detailView(int id);
	  List<Custom> viewAllCustomers();
	  List<Custom> removeCustom(int id);
//	  public Custom removeCustom(int id);
	  public Custom updateCustom(Custom c);
	  public List<Account> viewPendingAccounts();
	  public Account approveAccount(int accountId);
	  public Account rejectAccount(int accountId);
	  List<Transaction> viewTransactionHistory(long accountNumber);
	 
	  
}
