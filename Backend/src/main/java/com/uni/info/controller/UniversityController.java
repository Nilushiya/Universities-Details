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

    @PostMapping("/")
    public ResponseEntity<?> createUniversities(@RequestBody UniversityDto universityDto) {
        try {
            System.out.println("okey");

            UniversityDto createdUniversity = universityService.createUniversities(universityDto);
            return ResponseEntity.ok(createdUniversity);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @GetMapping("/")
    public List<University> getAllUniversities() {
        return universityService.getUniversities();
    }
}
