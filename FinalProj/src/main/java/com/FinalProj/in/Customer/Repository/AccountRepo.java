package com.FinalProj.in.Customer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinalProj.in.Customer.Model.Account;

public interface AccountRepo extends JpaRepository<Account, Integer> {

	List<Account> findByAccountStatus(String accountStatus);
	Account findByAccountNumber(long accountNumber);
    List<Account> findByCustomer_Id(int customerId);
}

