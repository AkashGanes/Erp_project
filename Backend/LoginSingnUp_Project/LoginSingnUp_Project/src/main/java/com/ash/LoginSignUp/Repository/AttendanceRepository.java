package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {

	Attendance findByDate(String Date);
}
