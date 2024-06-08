package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.UserAttendanceDetails;


public interface UserAttendanceDetailsRepository extends JpaRepository<UserAttendanceDetails, Integer> {

}
