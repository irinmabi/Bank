package com.FinalProj.in.Employee.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FinalProj.in.Employee.Model.Employee;

public interface EmpRepo extends JpaRepository<Employee,Integer>{
	Employee findByEmailAndPassword(String email,String password);
	Employee findByEmpId(int empId);

    List<Employee> findByRole(String role);
}
