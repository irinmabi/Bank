package com.FinalProj.in.Customer.Service;

import java.util.List;

import com.FinalProj.in.Customer.Model.Custom;

public interface CustomService {
	public Custom regCustom(Custom c);
	public Custom login(String email, String password);
	public Custom viewCustomer(int id);
}
