package com.ash.LoginSignUp.dto;

import java.util.List;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "user_leave_details")
public class UserAndLeaveDetails {

	@Id
	private int id;
	private String userName;
	
	@OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	private List<LeaveForm> leaveform;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<LeaveForm> getLeaveform() {
		return leaveform;
	}

	public void setLeaveform(List<LeaveForm> leaveform) {
		this.leaveform = leaveform;
	}

	
	
	
}
