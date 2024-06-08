package com.ash.LoginSignUp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.FileUploaddao;

@RestController
public class FileUploadController {

	@Autowired
	private FileUploaddao dao;
	
	@GetMapping("getFile/{id}")
	public ResponseEntity<?> getFile(@PathVariable int id) {
		byte[] fileData=dao.downloadFile(id);
		return ResponseEntity.status(HttpStatus.OK)
				.contentType(dao.getContentType(id))
				.body(fileData);
	}
}
