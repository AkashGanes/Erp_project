package com.ash.LoginSignUp.dao.usermanagementDao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.Repository.FileUploadRepository;
import com.ash.LoginSignUp.Repository.usermanagementrepo.BasicInformationRepository;
import com.ash.LoginSignUp.Repository.usermanagementrepo.PersonalInformationRepository;
import com.ash.LoginSignUp.dao.FileUploaddao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.PersonalInformation;
import com.ash.LoginSignUp.enity.PersonalInfoDTO;

@Repository
public class PersonalInformationDao {

	@Autowired
	private PersonalInformationRepository repo;
	
	@Autowired
	private BasicInformationRepository basicRepo;
	
	
	public BasicInformation save(List<PersonalInformation> info,int id) throws IOException {
		List<PersonalInformation> listOfInformation=new ArrayList<>();
		BasicInformation basicInfo=basicRepo.findById(id).get();
		for (PersonalInformation personalInformation : info) {
			PersonalInformation information=new PersonalInformation();
			information.setProof(personalInformation.getProof());
			information.setProofId(personalInformation.getProofId());
			information.setDocumentOfProof(personalInformation.getDocumentOfProof());
			listOfInformation.add(repo.save(information));
			
		}
		basicInfo.setPersonalInformation(listOfInformation);
		return basicRepo.save(basicInfo);
	}
	public PersonalInformation getById(int id) {
		return repo.findById(id).get();
	}
}
