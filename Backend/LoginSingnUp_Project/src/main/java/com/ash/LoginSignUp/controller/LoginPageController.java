package com.ash.LoginSignUp.controller;

import java.util.List;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.LoginPageDao;
import com.ash.LoginSignUp.dto.LoginPage;

@RestController
@CrossOrigin
public class LoginPageController {

	@Autowired
	private LoginPageDao dao;

	@PostMapping("save")
	public String saveDetails(@RequestBody LoginPage l) {
		String msg = "";
		if (dao.checkDuplicate(l.getEmail()) == 0) {
			dao.saveDetails(l);
			msg = "registered sucessfully";
		} else {
			msg = "email already exist";
		}
		return msg;
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
