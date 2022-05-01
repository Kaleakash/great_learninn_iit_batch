package com.greatLearning.libraryManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.greatLearning.libraryManagement.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	 @Query("SELECT u FROM User u WHERE u.username = :user")
	 public User getUserByUsername(@Param("user") String username);
	
}
