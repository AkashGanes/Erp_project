package com.ash.LoginSignUp.dao;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.LoginPageRepository;
import com.ash.LoginSignUp.Repository.RolesRepository;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.dto.Roles;

@Repository
public class LoginPageDao {

	@Autowired
	private LoginPageRepository repo;
	
	@Autowired
	private RolesRepository rolesRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public LoginPage saveDetails(LoginPage l) {
//		LoginPage loginPage= repo.save(l);
//		if(loginPage!=null) {
//			return loginPage;
//		}else 
//			return null

		if(l.getRole()==null) {
			Roles role=rolesRepo.findByRoleName("Employee");
			Set<Roles> roles=new HashSet<>();
			roles.add(role);
			l.setRole(roles);
		}else {
			String roleName=l.getRole().iterator().next().getRoleName();
			Roles role=rolesRepo.findByRoleName(roleName);
			Set<Roles> roles=new HashSet<>();
			roles.add(role);
			l.setRole(roles);	
		}
		
		l.setPassword(getEncodedPassword(l.getPassword()));
		return repo.save(l);
	}
	public LoginPage get(String email,String password){
		return repo.findByEmailAndPassword(email,password);
	}
	public int checkDuplicate(String email) {
		if(repo.findByEmail(email)==null) {
			return 0;
		}else {
			return 1;
		}
	}
	public List<LoginPage> getAll() {
		return repo.findAll();
	}
	public LoginPage getById(int id) {
		return repo.findById(id).get();
	}
	public String deleteUser(int id) {
		repo.deleteById(id);
		return "Sucessfully deleted";
	}
	public LoginPage updateUser(LoginPage l,int id) {
		
		String roleName=l.getRole().iterator().next().getRoleName();
		Roles role=rolesRepo.findByRoleName(roleName);
		Set<Roles> roles=new HashSet<>();
		roles.add(role);
		
		l.setId(id);
		l.setPassword(getEncodedPassword(l.getPassword()));
		l.setRole(roles);
		return repo.save(l);
	}
	
	public String getEncodedPassword(String password) {
	    return passwordEncoder.encode(password);
	}
}
