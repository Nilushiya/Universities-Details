package com.uni.info.controller;

import com.uni.info.dto.UniversityDto;
import com.uni.info.entity.University;
import com.uni.info.exception.UniversityServiceException;
import com.uni.info.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/university")

public class UniversityController {
    @Autowired
    private UniversityService universityService;

    @PostMapping("/create")
    public ResponseEntity<?> createUniversities(@RequestBody UniversityDto universityDto) {
        try {
            System.out.println("okey");

            UniversityDto createdUniversity = universityService.createUniversities(universityDto);
            return ResponseEntity.ok(createdUniversity);
        } catch (Exception e) {
            System.out.println("okeyh");

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/get")
    public List<University> getAllUniversities() {
        return universityService.getUniversities();
    }


    @PutMapping("/updateuni/{uni_id}")
    public String updateUniversity(@PathVariable Long uni_id , @RequestParam String uniName){
        System.out.println("uniname " + uni_id );

        int update = universityService.updateuniname(uni_id , uniName);
        return "update okay";
    }
}
