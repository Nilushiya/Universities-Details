package com.uni.info.service;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface StudentService {
    Student updateStudent(Long stuId, StudentDto studentDto);

    void deactivateUser(Long id);

    List<Student> getAdminDetails(Long studentId);


    ResponseEntity<?> changeType(StudentDto studentDto);
}
