package com.FinalProj.in.Employee.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinalProj.in.Customer.Model.Account;
import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Model.Transaction;
import com.FinalProj.in.Customer.Repository.AccountRepo;
import com.FinalProj.in.Customer.Repository.CustomRepo;
import com.FinalProj.in.Customer.Repository.TransactionRepo;
import com.FinalProj.in.Employee.Model.Employee;
import com.FinalProj.in.Employee.Repository.EmpRepo;

	@Service
	public class EmpImpl implements EmpService {

	    @Autowired
	    private CustomRepo customRepo;
	    @Autowired
	    private AccountRepo accountRepo;
	    @Autowired
	    private TransactionRepo transactionRepo;
	    @Autowired
	    private EmpRepo empRepo;
	    
	    
	    @Override
		public Employee regEmp(Employee e) {
			// TODO Auto-generated method stub
			return empRepo.save(e);
		}

		@Override
		public Employee loginEmp(String email, String password) {
			// TODO Auto-generated method stub
			Employee e= empRepo.findByEmailAndPassword(email, password);
			if (e!= null) {
				return e;
			}else {
				return null;
			}
			
		}
		
		public Employee viewById(int empId) {

		    return empRepo.findById(empId).orElse(null);

		}
		
	    @Override
	    public List<Custom> viewAllCustomers() {
	        return customRepo.findAll();
	    }

		@Override
		public List<Custom> removeCustom(int id) {
			// TODO Auto-generated method stub
			Optional<Custom> op=customRepo.findById(id);
			Custom c=new Custom();
			c.setId(id);
			c.setName(op.get().getName());
			c.setAddress(op.get().getAddress());
			c.setDob(op.get().getDob());
			c.setAge(op.get().getAge());
			c.setPhno(op.get().getPhno());
			c.setPassword(op.get().getPassword());
			c.setEmail(op.get().getEmail());
		c.setAccno(op.get().getAccno());
		List <Custom> list=new ArrayList<Custom>();
			list.add(c);
			customRepo.deleteById(id);
			return list; 
		}
//		public List<Custom> removeCustom(int id) {
//
//		    Optional<Custom> op = customRepo.findById(id);
//
//		    if(op.isEmpty()) {
//		        throw new RuntimeException("Customer not found");
//		    }
//
//		    Custom c = op.get();
//
//		    List<Custom> list = new ArrayList<>();
//		    list.add(c);
//
//		    customRepo.deleteById(id);
//
//		    return list;
//		}
//		public Custom removeCustom(int id) {
//
//		    Custom customer = customRepo.findById(id)
//		            .orElseThrow(() -> new RuntimeException("Customer not found"));
//
//		    customRepo.delete(customer);
//
//		    return customer;
//		}
//		@Override
		public Custom updateCustom(Custom c) {
			// TODO Auto-generated method stub
			return customRepo.save(c);
		}
		// View all pending accounts
	    public List<Account> viewPendingAccounts() {
	        return accountRepo.findByAccountStatus("PENDING");
	    }

	    // Approve account
	    public Account approveAccount(int accountId) {

	        Account acc = accountRepo.findById(accountId)
	                .orElseThrow(() -> new RuntimeException("Account not found"));

	        acc.setAccountStatus("APPROVED");
	        return accountRepo.save(acc);
	    }

	    // Reject account
	    public Account rejectAccount(int accountId) {

	        Account acc = accountRepo.findById(accountId)
	                .orElseThrow(() -> new RuntimeException("Account not found"));

	        acc.setAccountStatus("REJECTED");
	        return accountRepo.save(acc);
	    }
	   

	    @Override
	    public List<Transaction> viewTransactionHistory(long accountNumber) {

	        return transactionRepo.findByAccountAccountNumber(accountNumber);
	    }

		
	}