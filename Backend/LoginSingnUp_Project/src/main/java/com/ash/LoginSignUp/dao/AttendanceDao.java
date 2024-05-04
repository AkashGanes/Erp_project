package com.ash.LoginSignUp.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.AttendanceRepository;
import com.ash.LoginSignUp.Repository.LoginPageRepository;
import com.ash.LoginSignUp.Repository.UserAttendanceDetailsRepository;
import com.ash.LoginSignUp.dto.Attendance;
import com.ash.LoginSignUp.dto.LeaveForm;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.dto.UserAndLeaveDetails;
import com.ash.LoginSignUp.dto.UserAttendanceDetails;

@Repository
public class AttendanceDao {

	@Autowired
	private LoginPageRepository loginRepo;
	
	@Autowired
	private AttendanceRepository repo;
	
	@Autowired
	private UserAttendanceDetailsRepository userAttendanceDetailsRepository;

	public UserAttendanceDetails saveAttendance(Attendance attendance,int id) {

		List<Attendance> set= new ArrayList<>();
//		set.add(repo.save(leaveform));
		
		LoginPage l=loginRepo.findById(id).get();
		UserAttendanceDetails uad=new UserAttendanceDetails();
		
		try {
			userAttendanceDetailsRepository.findById(id).get();
		}
		catch (Exception e) {
			uad.setId(l.getId());
			uad.setUserName(l.getUserName());
			set.add(repo.save(attendance));
			uad.setAttendance(set);
			return userAttendanceDetailsRepository.save(uad);
		}
		
				
		
		 
		if(userAttendanceDetailsRepository.findById(id).get()!=null) {
			uad.setId(l.getId());
			uad.setUserName(l.getUserName());
			for (Attendance a : userAttendanceDetailsRepository.findById(id).get().getAttendance()) {
			    set.add(a);
			}
			set.add(repo.save(attendance));
			uad.setAttendance(set);
			return userAttendanceDetailsRepository.save(uad);
			
		}else {
			uad.setId(l.getId());
			uad.setUserName(l.getUserName());
			uad.setAttendance(set);
			return userAttendanceDetailsRepository.save(uad);
		}
		
		
	}

	public UserAttendanceDetails getByid(int id) {
		return userAttendanceDetailsRepository.findById(id).get();
	}

	public List<UserAttendanceDetails> getAllAttendance() {

		return userAttendanceDetailsRepository.findAll();
	} 
	public String deleteAttendance(int id) {
		userAttendanceDetailsRepository.deleteById(id);
		return "Successfully deleted";
	}
}
