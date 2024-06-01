package com.uni.info.repository;

import com.uni.info.enums.Role;
import com.uni.info.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface StudentRepo extends JpaRepository<Student, Long>{
    Student findByUserType(Role userType);
    boolean existsByEmail(String userEmail);
    Optional<Student> findByEmail(String userEmail);
    @Query("SELECT s FROM Student s WHERE s.email = :email AND s.isActive = true")
    Optional<Student> findEmail(@Param("email") String email);
    @Query("SELECT s , st FROM StudentInfo s JOIN Student st ON s.stu_id = st.studentId WHERE userType = 'USER' AND isActive = true")
    List<Object[]> findAllUser();

//    Optional<Student> findByUsername(String username);

}


