package com.ash.LoginSignUp.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.LeaveFormDao;
import com.ash.LoginSignUp.dto.LeaveForm;
import com.ash.LoginSignUp.dto.UserAndLeaveDetails;

@RestController
@CrossOrigin
public class LeaveFormController {

	@Autowired
	private LeaveFormDao leaveformDao;
	
 
	
	@PostMapping("saveLeave/{id}")
	public  UserAndLeaveDetails saveLeave(@RequestBody LeaveForm leaveform, @PathVariable int id) {
		
		return leaveformDao.saveLeave(leaveform,id);

        	}
	@GetMapping("getLeaveDetails/{id}")
	public UserAndLeaveDetails getById(@PathVariable int id) {
		return leaveformDao.getById(id);
	
	}
	
	@GetMapping("getLeaveData")
	public List<UserAndLeaveDetails> getAny() {
		return leaveformDao.getAll();
	}
	
	@DeleteMapping("deleteLeave/{id}")
	public String deleteLeave(@PathVariable int id) {
		return leaveformDao.deleteLeave(id);
	}
}
