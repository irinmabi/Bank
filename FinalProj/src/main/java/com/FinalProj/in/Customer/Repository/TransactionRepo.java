package com.FinalProj.in.Customer.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.FinalProj.in.Customer.Model.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction, Integer> {

    List<Transaction> findByAccountAccountNumber(long accountNumber);

}