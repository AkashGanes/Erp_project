package com.ash.LoginSignUp.dao;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.TermsAndConditionsRepository;
import com.ash.LoginSignUp.dto.TermsAndConditions;




@Repository
public class TermsAndConditionsDao {
	
	@Autowired
	private TermsAndConditionsRepository termsAndConditionsRepository;
	
	public List<TermsAndConditions> saveTermsAndConditions(TermsAndConditions[] termsAndConditions) {
		
		List<TermsAndConditions> terms=new ArrayList<TermsAndConditions>();
		
		for(TermsAndConditions t:termsAndConditions) {
			TermsAndConditions c =new TermsAndConditions();
//			c.setId(t.getId());
			c.setTerms(t.getTerms());
			terms.add(termsAndConditionsRepository.save(c));
		}
		
//		c.setId(termsAndConditions.getId());
//		c.setTerms(termsAndConditions.getTerms());
		//return ((ConditionDao) conditionRepository).saveCondition(condition);
		return terms;
	}
	
	public TermsAndConditions getById(long id) {
		return termsAndConditionsRepository.findById((int) id).get();
	}
 public List<TermsAndConditions> getAllCondition() {
		return termsAndConditionsRepository.findAll();
	}
 public String deleteCondition(long id) {
		termsAndConditionsRepository.deleteById((int) id);
		return "Sucessfully deleted";
	}
 public TermsAndConditions updateCondition(TermsAndConditions c,long id) {
		c.setId((int) id);
		return termsAndConditionsRepository.save(c);
	}


}
