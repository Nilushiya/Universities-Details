package com.uni.info.repository;

import com.uni.info.entity.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentInfoRepo extends JpaRepository<StudentInfo , Long> {
}
