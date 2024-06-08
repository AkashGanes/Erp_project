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
public class RolesDao {

	@Autowired
	private RolesRepository rolesRepo;
	
	@Autowired
	private LoginPageRepository repo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void initRolesAndSuperAdmin() {
		initSuperAdmin();
		if(!(rolesRepo.existsByRoleName("Admin") || rolesRepo.existsByRoleName("HR") || rolesRepo.existsByRoleName("Employee")) ) {
			
			Roles adminRole = new Roles();
	        adminRole.setRoleName("Admin");
	        adminRole.setRoleDescription("Admin role");
	        rolesRepo.save(adminRole);
	        
	        Roles hrRole = new Roles();
	        hrRole.setRoleName("HR");
	        hrRole.setRoleDescription("HR role");
	        rolesRepo.save(hrRole);
	        
	        Roles employee = new Roles();
	        employee.setRoleName("Employee");
	        employee.setRoleDescription("Employee role");
	        rolesRepo.save(employee);
		}
	}
	
	
	public void initSuperAdmin() {
//		Roles superAdminRole = new Roles();
//		superAdminRole.setRoleName("Super Admin");
//		superAdminRole.setRoleDescription("Super Admin role");
//        rolesRepo.save(superAdminRole);
//		
//		Roles adminRole = new Roles();
//        adminRole.setRoleName("Admin");
//        adminRole.setRoleDescription("Admin role");
//        rolesRepo.save(adminRole);
//        
//        Roles hrRole = new Roles();
//        hrRole.setRoleName("HR");
//        hrRole.setRoleDescription("HR role");
//        rolesRepo.save(hrRole);
//        
//        Roles employee = new Roles();
//        employee.setRoleName("Employee");
//        employee.setRoleDescription("Employee role");
//        rolesRepo.save(employee);
        
        if(!repo.existsByEmail("akash123@gmail.com")) {
        	LoginPage superAdmin= new LoginPage();
            superAdmin.setUserName("Akash");
            superAdmin.setLastName("Sandy");
            superAdmin.setEmail("akash123@gmail.com");
            superAdmin.setPassword(getEncodedPassword("Akash12345"));
            superAdmin.setPhoneNumber(7010496059l);
            Set<Roles> role= new HashSet<>();
            
            Roles superAdminRole = new Roles();
			superAdminRole.setRoleName("Super Admin");
			superAdminRole.setRoleDescription("Super Admin role");
			
            role.add(superAdminRole);
            superAdmin.setRole(role);
            repo.save(superAdmin);
            
        }
        

	}
	
	public String getEncodedPassword(String password) {
	    return passwordEncoder.encode(password);
	}
	public Roles saveRoles(Roles roles) {
		return rolesRepo.save(roles);
	}
	public List<Roles> getAllRoles() {
		return rolesRepo.findAll();
	}
}
