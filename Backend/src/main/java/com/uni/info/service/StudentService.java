package com.uni.info.service;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    Student updateStudent(Long stuId, StudentDto studentDto);

    void deactivateUser(Long id);

    List<Student> getAdminDetails(Long studentId);
}
