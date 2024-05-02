package com.uni.info.controller;

import com.uni.info.dto.FacultyDto;
import com.uni.info.entity.Faculty;
import com.uni.info.service.FacultyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/faculty")
@RequiredArgsConstructor
@CrossOrigin("*")

public class FacultyController {
    @Autowired
    private FacultyService facultyService;

    @PostMapping("/")
    public FacultyDto createFaculties(@RequestBody FacultyDto facultyDto){
        return facultyService.createFaculties(facultyDto);
    }

    @GetMapping("/get")
    public List<Faculty> getAllFaculties() {
        return facultyService.getFaculties();
    }

    @GetMapping("/getfaculty/{u_id}")
    public List<Faculty> groupedUniversity(@PathVariable ("u_id") Long u_id){
        return facultyService.groupedByUniversity(u_id);
    }
    @PutMapping("/updatefaculty/{fac_id}")
    public String updatefac(@PathVariable Long fac_id , @RequestParam String facultyName){
        facultyService.updateFaculty(fac_id , facultyName);
        return "update okay";
    }
}
