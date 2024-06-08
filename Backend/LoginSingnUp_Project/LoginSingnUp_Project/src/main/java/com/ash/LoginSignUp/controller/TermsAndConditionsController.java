package com.ash.LoginSignUp.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.TermsAndConditionsDao;
import com.ash.LoginSignUp.dto.TermsAndConditions;









@RestController
@CrossOrigin
public class TermsAndConditionsController {
	
	@Autowired
	private TermsAndConditionsDao termsAndConditionsDao;
	
	@PostMapping("saveCondition")
	public List<TermsAndConditions> saveTermsAndCondition(@RequestBody TermsAndConditions[] termsAndConditions) {
		
		
		return termsAndConditionsDao.saveTermsAndConditions(termsAndConditions);

  	}
	@GetMapping("getConditionBy/{id}")
	public TermsAndConditions getById(@PathVariable long id) {
		return termsAndConditionsDao.getById(id);
	}
	@GetMapping("getCondition")
	public List<TermsAndConditions> getTermsAndConditions() {
		return termsAndConditionsDao.getAllCondition();
 	}
	
	@DeleteMapping("deleteCondition/{id}")
	public String deleteCondition(@PathVariable long id) {
		return termsAndConditionsDao.deleteCondition(id);
	}
	@PutMapping("updateCondition/{id}")
	public TermsAndConditions updateCondition(@RequestBody TermsAndConditions c, @PathVariable long id) {
		return termsAndConditionsDao.updateCondition(c,id);
	}

}


