package com.ash.LoginSignUp.enity;

import com.ash.LoginSignUp.dto.LoginPage;

public class JwtResponse {

	private LoginPage user;
	private String jwtToken;
	

    public JwtResponse(LoginPage user, String jwtToken) {
        this.user = user;
        this.jwtToken = jwtToken;
    }
	
	public LoginPage getLoginPage() {
		return user;
	}
	public void setLoginPage(LoginPage loginPage) {
		this.user = loginPage;
	}
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	
	
}
