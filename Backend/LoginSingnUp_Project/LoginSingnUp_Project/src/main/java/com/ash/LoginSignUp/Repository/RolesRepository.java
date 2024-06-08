package com.ash.LoginSignUp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ash.LoginSignUp.dto.Roles;

public interface RolesRepository extends JpaRepository<Roles, String> {

	Roles findByRoleName(String roleName);
	boolean existsByRoleName(String roleName);
}
