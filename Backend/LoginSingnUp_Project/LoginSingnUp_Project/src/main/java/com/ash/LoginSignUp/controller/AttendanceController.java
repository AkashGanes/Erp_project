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

import com.ash.LoginSignUp.dao.AttendanceDao;
import com.ash.LoginSignUp.dto.Attendance;
import com.ash.LoginSignUp.dto.UserAttendanceDetails;


@RestController
@CrossOrigin
public class AttendanceController {

	
	@Autowired
	private AttendanceDao attendanceDao;
	
	
	@PostMapping("saveAttendance/{id}")
	public UserAttendanceDetails saveAttendance(@RequestBody Attendance attendance,@PathVariable int id) {
		
		return attendanceDao.saveAttendance(attendance,id);

        	}
	@GetMapping("getAllAttendance")
	public List<UserAttendanceDetails> getAllAttendance() {
		return attendanceDao.getAllAttendance();
	}
	
	@GetMapping("getAttendanceById/{id}")
	public UserAttendanceDetails  getAttendanceById(@PathVariable int id) {
		return attendanceDao.getByid(id);
	}
	@DeleteMapping("deleteAttendance/{id}")
	public String deleteAttendance(@PathVariable int id) {
		return attendanceDao.deleteAttendance(id);
	}
}
