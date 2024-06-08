package com.ash.LoginSignUp.Repository.usermanagementrepo;

import org.springframework.data.jpa.repository.JpaRepository;


import com.ash.LoginSignUp.dto.usermanagement.WorkExperience;

public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Integer>  {

}
