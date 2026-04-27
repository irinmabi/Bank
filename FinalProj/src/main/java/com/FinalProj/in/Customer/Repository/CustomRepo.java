package com.FinalProj.in.Customer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinalProj.in.Customer.Model.Custom;

public interface CustomRepo extends JpaRepository<Custom,Integer> {
	
	 Custom findByEmailAndPassword(String email, String password);
//	 Custom findById(int id);
	 //Select * from Custom where accno= ? and password=?;
	 //findBy-> tell spring this is a query
}
