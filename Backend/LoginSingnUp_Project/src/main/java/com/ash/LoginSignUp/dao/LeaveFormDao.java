package com.ash.LoginSignUp.dao;

import java.util.ArrayList;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.LeaveFormRepository;
import com.ash.LoginSignUp.Repository.LoginPageRepository;
import com.ash.LoginSignUp.Repository.UserAndLeaveDetailsRepository;
import com.ash.LoginSignUp.dto.LeaveForm;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.dto.UserAndLeaveDetails;



@Repository
public class LeaveFormDao {


	@Autowired
	private LeaveFormRepository repo;
	
	@Autowired
	private LoginPageRepository loginRepo;
	

	@Autowired
	private UserAndLeaveDetailsRepository ul; 

	public  UserAndLeaveDetails saveLeave(LeaveForm leaveform,int id){
		List<LeaveForm> set= new ArrayList<>();
//		set.add(repo.save(leaveform));
		
		LoginPage l=loginRepo.findById(id).get();
		UserAndLeaveDetails uld= new UserAndLeaveDetails();
		
		try {
			ul.findById(id).get();
		}
		catch (Exception e) {
			uld.setId(l.getId());
			uld.setUserName(l.getUserName());
			set.add(repo.save(leaveform));
			uld.setLeaveform(set);
			return ul.save(uld);
		}
		
				
		
		 
		if(ul.findById(id).get()!=null) {
			uld.setId(l.getId());
			uld.setUserName(l.getUserName());
			for (LeaveForm s : ul.findById(id).get().getLeaveform()) {
			    set.add(s);
			}
			set.add(repo.save(leaveform));
			uld.setLeaveform(set);
			return ul.save(uld);
			
		}else {
			uld.setId(l.getId());
			uld.setUserName(l.getUserName());
			uld.setLeaveform(set);
			return ul.save(uld);
		}
		
		}
	
	
	public UserAndLeaveDetails getById(int id) {
		return ul.findById(id).get();
	}


	public List<UserAndLeaveDetails> getAll() {
		
		return ul.findAll();
	}
	public String deleteLeave(int id) {
		ul.deleteById(id);
		return "Successfully deleted";
	}

}
