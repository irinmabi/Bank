package com.FinalProj.in.Employee.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinalProj.in.Customer.Model.Custom;

public interface EmpCustomRepo extends JpaRepository<Custom,Integer>{
   
}
