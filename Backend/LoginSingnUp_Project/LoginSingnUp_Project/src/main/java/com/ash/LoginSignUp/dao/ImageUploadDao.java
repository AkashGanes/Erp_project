package com.ash.LoginSignUp.dao;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.Repository.ImageUploadRepository;
import com.ash.LoginSignUp.Repository.LoginPageRepository;
import com.ash.LoginSignUp.dto.ImageUpload;
import com.ash.LoginSignUp.dto.LoginPage;
import com.ash.LoginSignUp.util.FileCompress;

@Repository
public class ImageUploadDao {

	@Autowired
	private ImageUploadRepository imgRepo;
	
	@Autowired
	private LoginPageRepository loginRepo;
	
	 public String uploadProfileImage(MultipartFile file,int id) throws IOException {
	    	ImageUpload image=new ImageUpload();
//	    	image.setId(id);
	    	image.setName(file.getOriginalFilename());
	    	image.setType(file.getContentType());
	    	image.setImageData(FileCompress.compressImage(file.getBytes()));
	        ImageUpload imageData = imgRepo.save(image);
	        LoginPage user=loginRepo.findById(id).get();
//	        user.setId(id);
	        user.setImage(imageData);
	        loginRepo.save(user);
	        if (imageData != null) {
	            return "file uploaded successfully : " + file.getOriginalFilename();
	        }
	        return null;
	    }
	 public ImageUpload uploadImageToEmployee(MultipartFile file) throws IOException {
	    	ImageUpload image=new ImageUpload();
//	    	image.setId(id);
	    	image.setName(file.getOriginalFilename());
	    	image.setType(file.getContentType());
	    	image.setImageData(FileCompress.compressImage(file.getBytes()));
	        ImageUpload imageData = imgRepo.save(image);
//	        LoginPage user=loginRepo.findById(id).get();
//	        user.setId(id);
//	        user.setImage(imageData);
//	        loginRepo.save(user);
	        if (imageData != null) {
	            return imageData;
	        }
	        return null;
	    }
	    public byte[] downloadImage(int id){
	        ImageUpload dbImageData = imgRepo.findById(id).get();
	        byte[] image=FileCompress.decompressImage(dbImageData.getImageData());
	        return image;
	    }
	    public MediaType getContentType(int id) {
	    	ImageUpload dbImageData = imgRepo.findById(id).get();
	        if (dbImageData.getName().endsWith(".png")) {
	            return MediaType.IMAGE_PNG;
	        } else if (dbImageData.getName().endsWith(".jpg") || dbImageData.getName().endsWith(".jpeg")) {
	            return MediaType.IMAGE_JPEG;
	        } else {
	            return null;
	        }
	    }
	    public String deleteImg(int id) {
	    	imgRepo.deleteById(id);
	    	return "deleted";
	    }
}
