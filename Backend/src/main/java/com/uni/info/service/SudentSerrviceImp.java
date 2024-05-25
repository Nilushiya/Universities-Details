package com.uni.info.service;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import com.uni.info.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SudentSerrviceImp implements StudentService{
    @Autowired
    private StudentRepo studentRepo;
    @Override
    public Student updateStudent(Long studentId, StudentDto studentDto) {
        Object Optional;
        return studentRepo.findById(studentId)
                .map(user -> {
                    if (studentDto.getName() != null) user.setName(studentDto.getName());
                    if (studentDto.getEmail() != null) user.setEmail(studentDto.getEmail());
                    return studentRepo.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
    }

