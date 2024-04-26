package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.LeaveForm;

public interface LeaveFormRepository extends JpaRepository<LeaveForm, Integer> {

}
