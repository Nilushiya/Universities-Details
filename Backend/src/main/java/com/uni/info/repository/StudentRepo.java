package com.uni.info.repository;

import com.uni.info.enums.Role;
import com.uni.info.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface StudentRepo extends JpaRepository<Student, Long>{
    Student findByUserType(Role userType);
    boolean existsByEmail(String userEmail);
    Optional<Student> findByEmail(String userEmail);
    @Query("SELECT s FROM Student s WHERE s.email = :email AND s.isActive = true")
    Optional<Student> findEmail(@Param("email") String email);

//    Optional<Student> findByUsername(String username);

}


