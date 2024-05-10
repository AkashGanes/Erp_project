package com.ash.LoginSignUp.controller.usermanagementController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.ash.LoginSignUp.dao.usermanagementDao.PersonalInformationDao;

import com.ash.LoginSignUp.dto.usermanagement.PersonalInformation;

@RestController
@CrossOrigin
public class PersonalInformationController {

	@Autowired
	private PersonalInformationDao dao;
	
	@PostMapping("savePersonalInformation")
	public PersonalInformation save(@RequestBody PersonalInformation info) {
		return dao.save(info);
	}
	@GetMapping("getPersonalInformation/{id}")
	public PersonalInformation getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
