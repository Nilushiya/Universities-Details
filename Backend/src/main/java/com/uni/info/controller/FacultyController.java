package com.uni.info.controller;

import com.uni.info.dto.UniversityDto;
import com.uni.info.entity.University;
import com.uni.info.service.FacultyService;
import com.uni.info.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/faculty")
@CrossOrigin("*")

public class FacultyController {
    @Autowired
    private FacultyService facultyService;

    @PostMapping("/")
    public UniversityDto createFaculties(@RequestBody UniversityDto universityDto){
        return facultyService.createFaculties(universityDto);
    }

    @GetMapping("/")
    public List<University> getAllFaculties() {
        return facultyService.getFaculties();
    }
}
