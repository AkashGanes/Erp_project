package com.ash.LoginSignUp.enity;



import org.springframework.web.multipart.MultipartFile;

public class PersonalInfoDTO   {

	    private String proof;
	    private String proofId;
	    private transient MultipartFile documentOfProof;
		public String getProof() {
			return proof;
		}
		public void setProof(String proof) {
			this.proof = proof;
		}
		public String getProofId() {
			return proofId;
		}
		public void setProofId(String proofId) {
			this.proofId = proofId;
		}
		public MultipartFile getDocumentOfProof() {
			return documentOfProof;
		}
		public void setDocumentOfProof(MultipartFile documentOfProof) {
			this.documentOfProof = documentOfProof;
		}
	    
	    
}
