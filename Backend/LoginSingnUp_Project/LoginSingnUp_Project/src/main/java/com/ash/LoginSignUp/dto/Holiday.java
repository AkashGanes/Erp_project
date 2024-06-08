package com.ash.LoginSignUp.dto;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


<<<<<<< HEAD:Backend/LoginSingnUp_Project/LoginSingnUp_Project/src/main/java/com/ash/LoginSignUp/dto/Holiday.java
=======


>>>>>>> bbd6a4ad2c134bde309f25877f447a7bd799024f:Backend/LoginSingnUp_Project/src/main/java/com/ash/LoginSignUp/dto/Holiday.java

@Entity
public class Holiday {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String date;
	private String leaveType;
    private int sNo;
	public String getLeaveType() {
		return leaveType;
	}

	public void setLeaveType(String leaveType) {
		this.leaveType = leaveType;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
    public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getsNo() {
		return sNo;
	}
    public void setsNo(int sNo) {
		this.sNo = sNo;
	}

}
