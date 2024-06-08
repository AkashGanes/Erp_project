package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ash.LoginSignUp.dto.FileUpload;

public interface FileUploadRepository extends JpaRepository<FileUpload, Integer> {

}
