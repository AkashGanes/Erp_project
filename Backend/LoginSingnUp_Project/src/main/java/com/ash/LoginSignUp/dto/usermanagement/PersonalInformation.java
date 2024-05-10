package com.ash.LoginSignUp.dto.usermanagement;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PersonalInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private long audharNumber;
	private String panNumber;
	private String voterID;
	private String rationCard;
	private String passport;
	private String license;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getAudharNumber() {
		return audharNumber;
	}
	public void setAudharNumber(long audharNumber) {
		this.audharNumber = audharNumber;
	}
	public String getPanNumber() {
		return panNumber;
	}
	public void setPanNumber(String panNumber) {
		this.panNumber = panNumber;
	}
	public String getVoterID() {
		return voterID;
	}
	public void setVoterID(String voterID) {
		this.voterID = voterID;
	}
	public String getRationCard() {
		return rationCard;
	}
	public void setRationCard(String rationCard) {
		this.rationCard = rationCard;
	}
	public String getPassport() {
		return passport;
	}
	public void setPassport(String passport) {
		this.passport = passport;
	}
	public String getLicense() {
		return license;
	}
	public void setLicense(String license) {
		this.license = license;
	}
	
	
}
