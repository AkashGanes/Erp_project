package com.ash.LoginSignUp.dao.usermanagementDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.ash.LoginSignUp.Repository.usermanagementrepo.EducationlQualificationRepository;

import com.ash.LoginSignUp.dto.usermanagement.EducationalQualification;

@Repository
public class EducationlQulaificationDao {

	@Autowired
	private EducationlQualificationRepository repo;
	
	public EducationalQualification save(EducationalQualification qualification) {
		return repo.save(qualification);
	}
	public EducationalQualification getById(int id) {
		return repo.findById(id).get();
	}
}
