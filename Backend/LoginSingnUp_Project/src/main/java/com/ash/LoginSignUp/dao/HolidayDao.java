package com.ash.LoginSignUp.dao;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ash.LoginSignUp.Repository.HolidayRepository;
import com.ash.LoginSignUp.dto.Holiday;




@Repository
public class HolidayDao {
	
	
	@Autowired
	private HolidayRepository repo;


	public Holiday saveHoliday(Holiday holiday) {
		// TODO Auto-generated method stub
		return repo.save(holiday);
	}

	public List<Holiday> getHoliday() {
		// TODO Auto-generated method stub
		return repo.findAll();
		}

	public String deleteHoliday(Holiday leaveType) {
		// TODO Auto-generated method stub
		repo.delete(leaveType);
		return "successfully deleted";
	}

//	public String deleteLeave(AstString leaveType) {
//		// TODO Auto-generated method stub
//		repo.delete(leaveType);
//		return  "successfully deleted";
//	}
//	
	

	


	

}

