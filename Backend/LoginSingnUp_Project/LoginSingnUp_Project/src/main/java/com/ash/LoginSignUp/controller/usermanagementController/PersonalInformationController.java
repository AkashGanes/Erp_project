package com.ash.LoginSignUp.controller.usermanagementController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.dao.FileUploaddao;
import com.ash.LoginSignUp.dao.usermanagementDao.PersonalInformationDao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.PersonalInformation;


@RestController
@CrossOrigin
public class PersonalInformationController {

	@Autowired
	private PersonalInformationDao dao;
	
	@Autowired
	private FileUploaddao fileDao;
	
	@PostMapping("savePersonalInformation/{id}")
	public BasicInformation save(@RequestParam("proof") List<String> proofs,
            @RequestParam("proofId") List<String> proofIds,
            @RequestParam("documentOfProof") List<MultipartFile> files,
            @PathVariable int id) throws IOException {
		List<PersonalInformation> listOfInformation=new ArrayList<>();
		
		for (int i=0;i<proofs.size();i++) {
		
			PersonalInformation information=new PersonalInformation();
			information.setProof(proofs.get(i));
			information.setProofId(proofIds.get(i));
//			 MultipartFile file = personalInformation.getDocumentOfProof(); 
			information.setDocumentOfProof(fileDao.uploadFileToEmployee(files.get(i)));
			listOfInformation.add(information);
			
		}
		return dao.save(listOfInformation,id);
	}
	@GetMapping("getPersonalInformation/{id}")
	public PersonalInformation getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
