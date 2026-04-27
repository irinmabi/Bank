package com.FinalProj.in.Customer.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Repository.CustomRepo;

@Service
public class CustomImpl implements CustomService{
@Autowired
	
	public CustomRepo customrepo;
//	@Override
	public Custom regCustom(Custom c) {
		// TODO Auto-generated method stub
		return customrepo.save(c);
	}
//login
	public Custom login(String email, String password) {

	    Custom custom = customrepo.findByEmailAndPassword(email, password);

	    if (custom != null) {
	        return custom;   // Login success
	    } else {
	        return null;     // Login failed
	    }
	}
	
//view
	@Override
	public Custom viewCustomer(int id){
	    return customrepo.findById(id).orElse(null);
	}

}
