package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.UserAndLeaveDetails;

public interface UserAndLeaveDetailsRepository extends JpaRepository<UserAndLeaveDetails, Integer>{

}
