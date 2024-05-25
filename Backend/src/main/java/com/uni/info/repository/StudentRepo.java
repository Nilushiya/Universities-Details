package com.uni.info.repository;

import aj.org.objectweb.asm.commons.Remapper;
import com.uni.info.entity.StudentInfo;
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



//    Optional<Student> findByUsername(String username);

}


