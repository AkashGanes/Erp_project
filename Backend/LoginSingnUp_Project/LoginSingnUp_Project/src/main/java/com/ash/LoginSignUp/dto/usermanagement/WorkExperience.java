package com.ash.LoginSignUp.dto.usermanagement;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.ash.LoginSignUp.dto.FileUpload;

@Entity
public class WorkExperience {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String companyName;
	private Date joinedDate;
	private Date releavedDate;
	private double ctc;
	@OneToOne(orphanRemoval=true,cascade = CascadeType.ALL)
	private FileUpload releavedLetter;
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
	public double getCtc() {
		return ctc;
	}
	public void setCtc(double ctc) {
		this.ctc = ctc;
	}

	public FileUpload getReleavedLetter() {
		return releavedLetter;
	}
	public void setReleavedLetter(FileUpload releavedLetter) {
		this.releavedLetter = releavedLetter;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	
	
}
