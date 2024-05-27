package com.uni.info.controller;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import com.uni.info.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor

public class StudentController {
    @Autowired
    private StudentService studentService;
    @PutMapping("/stuUpdate/{stu_id}")
    public Student updateProfile(@PathVariable ("stu_id") Long stu_id , @RequestBody StudentDto studentDto){
        return studentService.updateStudent(stu_id , studentDto);

    }
    @PutMapping("/deactivateUser/{id}")
    public void deactivateUser(@PathVariable Long id) {
        studentService.deactivateUser(id);
    }

    @GetMapping("/admin/{studentId}")
    public List<Student> getAdmin(@PathVariable Long studentId){
       return studentService.getAdminDetails(studentId);
    }
}
