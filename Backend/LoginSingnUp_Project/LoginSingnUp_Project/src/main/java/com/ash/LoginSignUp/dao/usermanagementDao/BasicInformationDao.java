package com.ash.LoginSignUp.dao.usermanagementDao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.usermanagementrepo.BasicInformationRepository;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;
import com.ash.LoginSignUp.enity.PaginationMeta;

@Repository
public class BasicInformationDao {

	@Autowired
	private BasicInformationRepository repo;
	
	public BasicInformation save(BasicInformation info) {
	
			return repo.save(info);	
	}
	public BasicInformation saveWithFile(BasicInformation info,int id) {
		  
		info.setId(id);
		return repo.save(info);
	}
	
	public BasicInformation getById(int id) {
		return repo.findById(id).get();
	}
	public String deleteById(int id) {
		repo.deleteById(id);
		return "deleted";
	}
	public List<BasicInformation> getAllInfo() {
		return repo.findAll();
	}
	public PaginationMeta<BasicInformation> paginationByAllBasicInformation(Pageable pageable) {
		
//		PageRequest pageRequest = PageRequest.of(0,6);
		return PaginationMeta.createPagination(repo.findAll(pageable));
		
	}
}
