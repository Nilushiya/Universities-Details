package com.uni.info.service;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    Student updateStudent(Long stuId, StudentDto studentDto);

    void deactivateUser(Long id);
}
