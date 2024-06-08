package com.ash.LoginSignUp.dao;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.Repository.FileUploadRepository;
import com.ash.LoginSignUp.dto.FileUpload;
import com.ash.LoginSignUp.util.FileCompress;

@Repository
public class FileUploaddao {

	@Autowired
	private FileUploadRepository fileRepo;
	

//	
//	 public FileUpload uploadFile(MultipartFile file,int id) throws IOException {
//	    	FileUpload uploadFile=new FileUpload();
//	    	uploadFile.setId(id);
//	    	uploadFile.setName(file.getOriginalFilename());
//	    	uploadFile.setType(file.getContentType());
//	    	uploadFile.setFileData(FileCompress.compressImage(file.getBytes()));
//	        FileUpload fileData= fileRepo.save(uploadFile);
//	        LoginPage user=loginRepo.findById(id).get();
//	        user.setId(id);
//	        user.setImage(imageData);
//	        loginRepo.save(user);
//	        if (fileData != null) {
//	            return fileData;
//	        }
//	        return null;
//	    }
	 public FileUpload uploadFileToEmployee(MultipartFile file) throws IOException {
	    	FileUpload uploadFile=new FileUpload();
//	    	uploadFile.setId(id);
	    	uploadFile.setName(file.getOriginalFilename());
	    	uploadFile.setType(file.getContentType());
	    	uploadFile.setFileData(FileCompress.compressImage(file.getBytes()));
	        FileUpload fileData= fileRepo.save(uploadFile);
//	        LoginPage user=loginRepo.findById(id).get();
//	        user.setId(id);
//	        user.setImage(imageData);
//	        loginRepo.save(user);
	        if (fileData != null) {
	            return fileData;
	        }
	        return null;
	    }
	
	    public byte[] downloadFile(int id){
	        FileUpload dbFileData = fileRepo.findById(id).get();
	        byte[] image=FileCompress.decompressImage(dbFileData.getFileData());
//	        dbFileData.setFileData(image);
	        return image;
	    }
	    public MediaType getContentType(int id) {
	    	FileUpload dbFileData = fileRepo.findById(id).get();
	        if (dbFileData.getName().endsWith(".pdf")) {
	            return MediaType.APPLICATION_PDF;
	        }  else if (dbFileData.getName().endsWith(".xlsx")) {
	            return MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
	        } else {
	            return MediaType.ALL;
	        }
}
}