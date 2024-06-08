package com.ash.LoginSignUp.Repository.usermanagementrepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.usermanagement.BasicInformation;

public interface BasicInformationRepository extends JpaRepository<BasicInformation, Integer> {

}
