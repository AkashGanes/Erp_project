package com.ash.LoginSignUp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ash.LoginSignUp.dao.JwtService;
import com.ash.LoginSignUp.enity.JwtRequest;
import com.ash.LoginSignUp.enity.JwtResponse;

@RestController
@CrossOrigin
public class JwtController {

	
	    @Autowired
	    private JwtService jwtService;

	    @PostMapping("/authenticate")
	    public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
	        return jwtService.createJwtToken(jwtRequest);
	    }
}
