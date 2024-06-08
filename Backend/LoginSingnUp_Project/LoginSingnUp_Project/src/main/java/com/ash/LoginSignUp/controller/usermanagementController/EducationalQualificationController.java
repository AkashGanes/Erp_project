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
import com.ash.LoginSignUp.dao.usermanagementDao.EducationlQulaificationDao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.EducationalQualification;

@RestController
@CrossOrigin
public class EducationalQualificationController {

	@Autowired
	private EducationlQulaificationDao dao;
	
	@Autowired
	private FileUploaddao fileDao;
	
	@PostMapping("saveQualification/{id}")
	public BasicInformation save(@RequestParam("specialization") List<String> specialization,
			                             @RequestParam("qualification") List<String> qualification,
			                             @RequestParam("academicYear" ) List<String> academicYear,
			                             @RequestParam("documentOfQualification") List<MultipartFile> documentOfQualification,
			                             @PathVariable int id) throws IOException {
		List<EducationalQualification> listOfQualification=new ArrayList<>();
		for(int i=0;i<specialization.size();i++) {
			EducationalQualification qua=new EducationalQualification();
			qua.setSpecialization(specialization.get(i));
			qua.setQualification(qualification.get(i));
			qua.setAcademicYear(academicYear.get(i));
			qua.setDocumentOfQualification(fileDao.uploadFileToEmployee(documentOfQualification.get(i)));
			listOfQualification.add(qua);
			
		}
		return dao.save(listOfQualification,id);
	}
	@GetMapping("getQualification/{id}")
	public EducationalQualification getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
