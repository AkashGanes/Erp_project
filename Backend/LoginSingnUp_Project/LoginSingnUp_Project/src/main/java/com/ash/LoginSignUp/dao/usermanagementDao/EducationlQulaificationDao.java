package com.ash.LoginSignUp.dao.usermanagementDao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.usermanagementrepo.BasicInformationRepository;
import com.ash.LoginSignUp.Repository.usermanagementrepo.EducationlQualificationRepository;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.EducationalQualification;

@Repository
public class EducationlQulaificationDao {

	@Autowired
	private EducationlQualificationRepository repo;
	
	@Autowired
	private BasicInformationRepository basicRepo;
	
	public BasicInformation save(List<EducationalQualification> listOfQualification,int id) {
		BasicInformation basicInfo=basicRepo.findById(id).get();
		List<EducationalQualification> listQua=new ArrayList<>();
		for(EducationalQualification qua:listOfQualification) {
			listQua.add(repo.save(qua));
		}
		basicInfo.setEducationalQualifications(listQua);
		return basicRepo.save(basicInfo);
	}
	public EducationalQualification getById(int id) {
		return repo.findById(id).get();
	}
}
