package com.ash.LoginSignUp.controller.usermanagementController;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
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
import com.ash.LoginSignUp.dao.usermanagementDao.WorkExperienceDao;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.dto.usermanagement.WorkExperience;

@RestController
@CrossOrigin
public class WorkExperienceController {

	@Autowired
	private WorkExperienceDao dao;
	
	@Autowired
	private FileUploaddao fileDao;
	
	@PostMapping("saveExperience/{id}")
	public BasicInformation save(@RequestParam("companyName") List<String> companies,
            @RequestParam("joinedDate") List<String> joinedDates,
            @RequestParam("releavedDate") List<String> releavedDates,
            @RequestParam("ctc") List<String> ctcs,
            @RequestParam("releavedLetter") List<MultipartFile>reletters,
            @RequestParam("reason") List<String> reasons,@PathVariable int id) throws ParseException, IOException {
		List<WorkExperience> listExp=new ArrayList<>();
		for (int i=0;i<companies.size();i++) {
			WorkExperience exp=new WorkExperience();
			exp.setCompanyName(companies.get(i));
			exp.setJoinedDate(new SimpleDateFormat("yyyy-MM-dd").parse(joinedDates.get(i)));
			exp.setReleavedDate(new SimpleDateFormat("yyyy-MM-dd").parse(releavedDates.get(i)));
			exp.setReleavedLetter(fileDao.uploadFileToEmployee(reletters.get(i)));
			exp.setCtc(Double.parseDouble(ctcs.get(i)));
			exp.setReason(reasons.get(i));
			listExp.add(exp);
		}
		return dao.save(listExp,id);
	}
	@GetMapping("getExperience/{id}")
	public WorkExperience getById(@PathVariable int id) {
		return dao.getById(id);
	}
}
