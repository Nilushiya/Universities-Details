package com.uni.info.repository;

import com.uni.info.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Long>{
    Optional<Student> findByEmail(String email);
//    Optional<Student> findByUsername(String username);

}


