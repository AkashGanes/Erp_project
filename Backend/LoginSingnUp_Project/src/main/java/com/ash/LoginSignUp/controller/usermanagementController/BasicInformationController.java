package com.ash.LoginSignUp.controller.usermanagementController;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ash.LoginSignUp.dao.usermanagementDao.BasicInformationDao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;

@Repository
@CrossOrigin
public class BasicInformationController {

	@Autowired
	private BasicInformationDao dao;
	
	@PostMapping("saveInformation")
	public BasicInformation save(@RequestBody BasicInformation info) {
		return dao.save(info);
	}
	@GetMapping("getInformation/{id}")
	public BasicInformation getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
