package com.ash.LoginSignUp.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.HolidayDao;
import com.ash.LoginSignUp.dto.Holiday;




@RestController
@CrossOrigin
public class HolidayController {

	
	@Autowired
	private HolidayDao holidayDao;
	
	@PostMapping("saveDay")
	public Holiday saveHoliday(@RequestBody Holiday holiday) {
		
		return holidayDao.saveHoliday(holiday);

  	}
	@GetMapping("getHoliday")
	public List<Holiday> getHoliday() {
		return holidayDao.getHoliday();
 	}
}
//	@DeleteMapping("delete/{id}")
//	public String deleteLeave(@PathVariable Holiday holiday,@ ) {		
//		return holidayDao.deleteLeave(id);
//	}
//}
