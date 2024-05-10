package com.ash.LoginSignUp.dao.usermanagementDao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.usermanagementrepo.BasicInformationRepository;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;

@Repository
public class BasicInformationDao {

	@Autowired
	private BasicInformationRepository repo;
	
	public BasicInformation save(BasicInformation info) {
		return repo.save(info);
	}
	public BasicInformation getById(int id) {
		return repo.findById(id).get();
	}
}
