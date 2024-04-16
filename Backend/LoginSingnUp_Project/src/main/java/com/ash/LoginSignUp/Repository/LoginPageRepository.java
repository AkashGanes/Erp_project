package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.LoginPage;

public interface LoginPageRepository extends JpaRepository<LoginPage, Integer>{
    LoginPage findByEmailAndPassword(String email, String password);
    LoginPage findByEmail(String email);
    boolean existsByEmail(String email);
	

}
