package com.ash.LoginSignUp.controller.usermanagementController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.usermanagementDao.WorkExperienceDao;
import com.ash.LoginSignUp.dto.usermanagement.WorkExperience;

@RestController
@CrossOrigin
public class WorkExperienceController {

	@Autowired
	private WorkExperienceDao dao;
	
	@PostMapping("saveExperience")
	public WorkExperience save(@RequestBody WorkExperience info) {
		return dao.save(info);
	}
	@GetMapping("getExperience/{id}")
	public WorkExperience getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
