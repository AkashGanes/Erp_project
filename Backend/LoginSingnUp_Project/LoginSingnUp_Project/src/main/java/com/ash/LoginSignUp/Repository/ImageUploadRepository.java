package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.ImageUpload;

public interface ImageUploadRepository extends JpaRepository<ImageUpload, Integer>{

}
