package com.ash.LoginSignUp.controller.usermanagementController;



import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.dao.FileUploaddao;
import com.ash.LoginSignUp.dao.ImageUploadDao;
import com.ash.LoginSignUp.dao.usermanagementDao.BasicInformationDao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.enity.PaginationMeta;

@RestController
@CrossOrigin
public class BasicInformationController {

	@Autowired
	private BasicInformationDao dao;
	
	@Autowired
	private ImageUploadDao imgDao;
	
	@Autowired
	private FileUploaddao filedao;
	
	@PostMapping("saveInformation")
	public BasicInformation save(@RequestParam("firstName") String firstName,
            @RequestParam("lastName") String lastName,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("dob")String dob,
            @RequestParam("gender") String gender,
            @RequestParam("maritalStatus") String maritalStatus,
            @RequestParam("picture") MultipartFile picture,
            @RequestParam("resume") MultipartFile resume) throws IOException, ParseException {
		 
		BasicInformation basicInfo=new BasicInformation();
		basicInfo.setFirstName(firstName);
		basicInfo.setLastName(lastName);
		basicInfo.setPhoneNumber(Long.parseLong(phoneNumber));
		basicInfo.setDob(new SimpleDateFormat("yyyy-MM-dd").parse(dob));
		basicInfo.setGender(gender);
		basicInfo.setMaritalStatus(maritalStatus);
		BasicInformation dbInfo=dao.save(basicInfo);
		dbInfo.setPicture(imgDao.uploadImageToEmployee(picture));
		dbInfo.setResume(filedao.uploadFileToEmployee(resume));
		
		return dao.saveWithFile(dbInfo, dbInfo.getId());
			
	}
	@GetMapping("getAllBasicInformation")
	public List<BasicInformation> getAll(){
		return dao.getAllInfo();
	}
	@GetMapping("paginationBasicInfo")
	public PaginationMeta<BasicInformation> paginationByBasicInforamtion(Pageable page){
		return dao.paginationByAllBasicInformation(page);
	}
	@GetMapping("getInformation/{id}")
	public BasicInformation getById(@PathVariable int id) {
		return dao.getById(id);
	}
	
	@DeleteMapping("deleteBasicInfo/{id}")
	public String deleteById(@PathVariable int id) {
		return dao.deleteById(id);
	}
}
