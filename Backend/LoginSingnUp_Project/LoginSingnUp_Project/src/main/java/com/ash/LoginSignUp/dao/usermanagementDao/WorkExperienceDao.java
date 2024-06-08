package com.ash.LoginSignUp.dao.usermanagementDao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.usermanagementrepo.BasicInformationRepository;
import com.ash.LoginSignUp.Repository.usermanagementrepo.WorkExperienceRepository;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.WorkExperience;

@Repository
public class WorkExperienceDao {

	@Autowired
	private WorkExperienceRepository repo;
	
	@Autowired
	private BasicInformationRepository basicRepo;
	
	public BasicInformation save(List<WorkExperience> exp,int id) {
		List<WorkExperience> listExp=new ArrayList<>();
		BasicInformation basicInfo=basicRepo.findById(id).get();
		for(WorkExperience experience:exp ) {
			listExp.add(repo.save(experience));
		}
		basicInfo.setWorkExp(listExp);
		return basicRepo.save(basicInfo);
	}
	public WorkExperience getById(int id) {
		return repo.findById(id).get();
	}
}
