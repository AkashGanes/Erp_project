package com.ash.LoginSignUp.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.JwtService;
import com.ash.LoginSignUp.dao.LoginPageDao;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.enity.JwtRequest;
import com.ash.LoginSignUp.enity.JwtResponse;
import com.ash.LoginSignUp.enity.ResponseStructure;

@RestController
@CrossOrigin
public class LoginPageController {

	@Autowired
	private LoginPageDao dao;
	
	
	@Autowired
	private JwtService jwtService;
	
	@PostMapping("save")
	public ResponseStructure<JwtResponse> saveDetails(@RequestBody LoginPage l) throws Exception {
		ResponseStructure<JwtResponse> response=new ResponseStructure<>();
		String password=l.getPassword();
		
		if (dao.checkDuplicate(l.getEmail()) == 0) {
			
		LoginPage user=	dao.saveDetails(l);
		JwtRequest jwtReq=new JwtRequest();
		jwtReq.setEmail(user.getEmail());
		jwtReq.setPassword(password);
		
		response.setStatus(HttpStatus.OK.value());
		response.setMessage("successfully registered");
		response.setData(jwtService.createJwtToken(jwtReq));
		 return response ;
		
//			msg = "registered sucessfully";
		} else {
//			msg = "email already exist";
			response.setStatus(HttpStatus.FAILED_DEPENDENCY.value());
			response.setMessage("email already exists");
			return response;
		}
		
	}

	@GetMapping("get/{email}/{password}")
	public LoginPage get(@PathVariable String email ,@PathVariable String password) {
		return dao.get(email,password);
	}

	@GetMapping("getById/{id}")
	public LoginPage getById(@PathVariable int id) {
		return dao.getById(id);
	}

	@GetMapping("getAll")
	public List<LoginPage> getAll() {
		return dao.getAll();
	}

	@DeleteMapping("delete/{id}")
	public String deleteUser(@PathVariable int id) {
		return dao.deleteUser(id);
	}

	@PutMapping("update/{id}")
	public LoginPage updateUser(@RequestBody LoginPage l, @PathVariable int id) {
		return dao.updateUser(l, id);
	}

	@GetMapping({ "/forAdmin" })
	@PreAuthorize("hasRole('Super Admin')")
	public String forAdmin() {
		return "This URL is only accessible to the admin";
	}
	@GetMapping({ "/forHR" })
	@PreAuthorize("hasRole('HR')")
	public String forHR() {
		return "This URL is only accessible to the hr";
	}

}
