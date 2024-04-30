package com.uni.info.repository;

import com.uni.info.entity.Role;
import com.uni.info.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.Optional;
@Repository

public interface StudentRepo extends JpaRepository<Student, Long>{
    Student findByUserType(Role userType);
    boolean existsByEmail(String userEmail);
    Optional<Student> findByEmail(String userEmail);

//    Optional<Student> findByUsername(String username);

}


