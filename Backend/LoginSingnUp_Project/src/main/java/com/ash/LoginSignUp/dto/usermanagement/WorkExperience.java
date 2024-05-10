package com.ash.LoginSignUp.dto.usermanagement;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WorkExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String companyName;
	private Date joinedDate;
	private Date releavedDate;
	private int ctc;
	private String releavedLetter;
	private String reason;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public Date getJoinedDate() {
		return joinedDate;
	}
	public void setJoinedDate(Date joinedDate) {
		this.joinedDate = joinedDate;
	}
	public Date getReleavedDate() {
		return releavedDate;
	}
	public void setReleavedDate(Date releavedDate) {
		this.releavedDate = releavedDate;
	}
	public int getCtc() {
		return ctc;
	}
	public void setCtc(int ctc) {
		this.ctc = ctc;
	}
	public String getReleavedLetter() {
		return releavedLetter;
	}
	public void setReleavedLetter(String releavedLetter) {
		this.releavedLetter = releavedLetter;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	
	
}
