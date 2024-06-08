package com.ash.LoginSignUp.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ash.LoginSignUp.dao.ImageUploadDao;

@RestController
@CrossOrigin
public class ImageUploadController {

	@Autowired
	private ImageUploadDao dao;
	
	@PostMapping("saveImage/{id}")
	public ResponseEntity<?> uploadImage(@RequestParam("imagefile")MultipartFile file ,@PathVariable int id) throws IOException {
		String uploadImage = dao.uploadProfileImage(file,id);
		return ResponseEntity.status(HttpStatus.OK)
				.body(uploadImage);
	}

	@GetMapping("getImage/{id}")
	public ResponseEntity<?> downloadImage(@PathVariable int id){
		byte[] imageData=dao.downloadImage(id);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(dao.getContentType(id))
				.body(imageData);

	}
	@DeleteMapping("deleteImg/{id}")
	public String deleteImg(int id){
		return dao.deleteImg(id);
	}

}
