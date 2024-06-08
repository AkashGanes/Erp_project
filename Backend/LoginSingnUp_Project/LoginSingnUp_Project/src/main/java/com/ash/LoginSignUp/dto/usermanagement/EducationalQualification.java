package com.ash.LoginSignUp.dto.usermanagement;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.ash.LoginSignUp.dto.FileUpload;

@Entity
public class EducationalQualification {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String specialization;
	private String qualification;
	private String academicYear;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private FileUpload documentOfQualification;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}
	public String getAcademicYear() {
		return academicYear;
	}
	public void setAcademicYear(String academicYear) {
		this.academicYear = academicYear;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public FileUpload getDocumentOfQualification() {
		return documentOfQualification;
	}
	public void setDocumentOfQualification(FileUpload documentOfQualification) {
		this.documentOfQualification = documentOfQualification;
	}
	
	
}
