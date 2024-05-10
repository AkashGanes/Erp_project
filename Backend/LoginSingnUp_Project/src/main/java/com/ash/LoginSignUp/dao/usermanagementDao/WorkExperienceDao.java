package com.ash.LoginSignUp.dao.usermanagementDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.usermanagementrepo.WorkExperienceRepository;
import com.ash.LoginSignUp.dto.usermanagement.WorkExperience;

@Repository
public class WorkExperienceDao {

	@Autowired
	private WorkExperienceRepository repo;
	
	public WorkExperience save(WorkExperience exp) {
		return repo.save(exp);
	}
	public WorkExperience getById(int id) {
		return repo.findById(id).get();
	}
}
