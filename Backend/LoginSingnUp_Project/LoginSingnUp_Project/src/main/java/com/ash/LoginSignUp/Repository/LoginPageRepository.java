package com.ash.LoginSignUp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ash.LoginSignUp.dto.LoginPage;

public interface LoginPageRepository extends JpaRepository<LoginPage, Integer>{
	
	@Query(nativeQuery = true, value = "SELECT * FROM login_page WHERE user_name LIKE :name%")
	List<LoginPage> findByAll(@Param("name")String name);
    LoginPage findByEmailAndPassword(String email, String password);
    LoginPage findByEmail(String email);
    boolean existsByEmail(String email);
	

}
