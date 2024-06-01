package com.uni.info.controller;

import com.uni.info.dto.StudentDto;
import com.uni.info.entity.Student;
import com.uni.info.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

//import static sun.awt.image.MultiResolutionCachedImage.map;

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
    @PutMapping("/deactivateUser/{studentId}")
    public Optional<Student> deactivateUser(@PathVariable Long studentId) {
      return studentService.deactivateUser(studentId);
//          .map(user -> ResponseEntity.ok("User has been deactivated"))
//                .orElse(ResponseEntity.status(404).body("User not found"));
    }

    @PostMapping("/changeType")
    public ResponseEntity<?> changeUserType(@RequestBody StudentDto studentDto) {
                return studentService.changeType(studentDto);

    }
    @GetMapping("/getAllUser")
    public  List<Object[]> getAllUser(){
        return studentService.getUsers();
    }
    @GetMapping("/admin/{studentId}")
    public List<Student> getAdmin(@PathVariable Long studentId){
       return studentService.getAdminDetails(studentId);
    }

//    @PostMapping("/deactivate/{studentId}")
//    public ResponseEntity<String> deactivateUser(@PathVariable Long studentId) {
//        return studentService.deactivateUser(studentId)
//
//    }
}
