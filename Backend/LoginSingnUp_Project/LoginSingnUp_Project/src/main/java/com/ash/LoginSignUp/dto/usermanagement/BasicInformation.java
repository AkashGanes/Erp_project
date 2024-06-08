	package com.ash.LoginSignUp.dto.usermanagement;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ash.LoginSignUp.dto.FileUpload;
import com.ash.LoginSignUp.dto.ImageUpload;

@Entity
public class BasicInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String firstName;
	private String lastName;
	private long phoneNumber;
	private Date dob;
	private String gender;
	private String maritalStatus;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private ImageUpload picture;
    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private FileUpload resume;
	
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<PersonalInformation> personalInformation;
    
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<EducationalQualification> educationalQualifications;
    
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<WorkExperience> workExp;
//	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
//	private PersonalInformation personalInfo;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public ImageUpload getPicture() {
		return picture;
	}
	public void setPicture(ImageUpload picture) {
		this.picture = picture;
	}
	public FileUpload getResume() {
		return resume;
	}
	public void setResume(FileUpload resume) {
		this.resume = resume;
	}
	public List<PersonalInformation> getPersonalInformation() {
		return personalInformation;
	}
	public void setPersonalInformation(List<PersonalInformation> personalInformation) {
		this.personalInformation = personalInformation;
	}
	public List<EducationalQualification> getEducationalQualifications() {
		return educationalQualifications;
	}
	public void setEducationalQualifications(List<EducationalQualification> educationalQualifications) {
		this.educationalQualifications = educationalQualifications;
	}
	public List<WorkExperience> getWorkExp() {
		return workExp;
	}
	public void setWorkExp(List<WorkExperience> workExp) {
		this.workExp = workExp;
	}

	
	
	
	
}
