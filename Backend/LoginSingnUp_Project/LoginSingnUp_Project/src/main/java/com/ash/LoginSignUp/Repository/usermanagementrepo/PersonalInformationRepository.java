package com.ash.LoginSignUp.Repository.usermanagementrepo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ash.LoginSignUp.dto.usermanagement.PersonalInformation;

public interface PersonalInformationRepository extends JpaRepository<PersonalInformation, Integer> {

}
