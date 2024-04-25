package com.uni.info.repository;

//import com.uni.info.entity.Role;
import com.uni.info.entity.Role;
import com.uni.info.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.converter.json.GsonBuilderUtils;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Long>{
    Optional<Student> findByEmail(String email);


    Student findByUserType(Role userType);

    boolean existsByEmail(String userEmail);
//    Optional<Student> findByUsername(String username);

}


