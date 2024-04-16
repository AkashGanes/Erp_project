package com.ash.LoginSignUp.controller;

import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.RolesDao;
import com.ash.LoginSignUp.dto.Roles;

@RestController
@CrossOrigin
public class RolesController {

	@Autowired
	private RolesDao rolesDao;
	
	@PostConstruct
	public void activateRolesAndAdmin() {
		rolesDao.initRolesAndSuperAdmin();
	}
	
	@PostMapping("saveRoles")
	public Roles saveRoles(@RequestBody Roles roles) {
		return rolesDao.saveRoles(roles);
	}
	
	@GetMapping("getAllRoles")
	public List<Roles> getAllRoles() {
		return rolesDao.getAllRoles();
	}
	
	
}
