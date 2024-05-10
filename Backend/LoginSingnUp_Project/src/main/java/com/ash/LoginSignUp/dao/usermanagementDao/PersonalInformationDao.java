package com.ash.LoginSignUp.dao.usermanagementDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import com.ash.LoginSignUp.Repository.usermanagementrepo.PersonalInformationRepository;

import com.ash.LoginSignUp.dto.usermanagement.PersonalInformation;

@Repository
public class PersonalInformationDao {

	@Autowired
	private PersonalInformationRepository repo;
	
	public PersonalInformation save(PersonalInformation info) {
		return repo.save(info);
	}
	public PersonalInformation getById(int id) {
		return repo.findById(id).get();
	}
}
