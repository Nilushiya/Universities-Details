package com.uni.info.service;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import com.uni.info.enums.Role;
import com.uni.info.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class SudentSerrviceImp implements StudentService{
    @Autowired
    private StudentRepo studentRepo;
//    @Autowired
//    private EmailService emailService;
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

    @Override
    public Optional<Student> deactivateUser(Long id) {
        Optional<Student> userOptional = studentRepo.findById(id);
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            user.setIsActive(false);
            studentRepo.save(user);
//            emailService.sendDeactivationEmail(user.getEmail(), "Account Deactivated", "Your account is no longer active.");
        }
        return userOptional;
    }

    @Override
    public List<Student> getAdminDetails(Long studentId) {
        Optional<Student> studentOpt = studentRepo.findById(studentId);
        if (studentOpt.isPresent()) {
            return Collections.singletonList(studentOpt.get());
        } else {
            return Collections.emptyList(); // Or handle this case as needed
        }
    }

    @Override
    public ResponseEntity<?> changeType(StudentDto studentDto) {
                Optional<Student> existingUser = studentRepo.findEmail(studentDto.getEmail());
        if (existingUser.isPresent()) {
            Student updateUser = existingUser.get();
           if(updateUser.getUserType() == Role.ADMIN){
               return ResponseEntity.ok().body("Already, This user are Admin");
           }
           else {
               updateUser.setUserType(Role.ADMIN);
               studentRepo.save(updateUser);
               return ResponseEntity.ok().body("User type updated successfully");
           }
//            updateUser.setUserType(studentDto.getUserType());

        } else {
            return ResponseEntity.status(404).body("User not found");
        }

    }

    @Override
    public List<Object[]> getUsers() {
        return studentRepo.findAllUser();
    }

}

