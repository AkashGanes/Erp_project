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
public class PersonalInformation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String proof;
	private String proofId;
	
	@OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	private FileUpload documentOfProof;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProofId() {
		return proofId;
	}
	public void setProofId(String proofId) {
		this.proofId = proofId;
	}
	public FileUpload getDocumentOfProof() {
		return documentOfProof;
	}
	public void setDocumentOfProof(FileUpload documentOfProof) {
		this.documentOfProof = documentOfProof;
	}
	public String getProof() {
		return proof;
	}
	public void setProof(String proof) {
		this.proof = proof;
	}
	
	
}
