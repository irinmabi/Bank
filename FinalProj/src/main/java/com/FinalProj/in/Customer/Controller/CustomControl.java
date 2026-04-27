package com.FinalProj.in.Customer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FinalProj.in.Customer.Model.Custom;
import com.FinalProj.in.Customer.Service.CustomService;

@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("custom")
@RestController 
public class CustomControl {
	@Autowired
	public CustomService customservice;
@PostMapping("/reg")
	public Custom regCustom(@RequestBody Custom c) {
		
		return customservice.regCustom(c);
	}

	
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Custom c) {

    Custom custom = customservice.login(c.getEmail(), c.getPassword());

    if (custom != null) {
        return ResponseEntity.ok(custom);        // returns full customer object
    } else {
        return ResponseEntity.status(401).body("Invalid Account Number or Password");
    }
}
@GetMapping("/view/{id}")
public Custom viewCustomer(@PathVariable int id){
    return customservice.viewCustomer(id);
}
	
}
