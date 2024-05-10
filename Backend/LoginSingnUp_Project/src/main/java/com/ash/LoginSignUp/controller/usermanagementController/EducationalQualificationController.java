package com.ash.LoginSignUp.controller.usermanagementController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.ash.LoginSignUp.dao.usermanagementDao.EducationlQulaificationDao;
import com.ash.LoginSignUp.dto.usermanagement.EducationalQualification;

@RestController
@CrossOrigin
public class EducationalQualificationController {

	@Autowired
	private EducationlQulaificationDao dao;
	
	@PostMapping("saveQualification")
	public EducationalQualification save(@RequestBody EducationalQualification qualification) {
		return dao.save(qualification);
	}
	@GetMapping("getQualification/{id}")
	public EducationalQualification getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
