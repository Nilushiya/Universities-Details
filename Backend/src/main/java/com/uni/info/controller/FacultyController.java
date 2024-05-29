package com.uni.info.controller;

import com.uni.info.dto.FacultyDto;
import com.uni.info.entity.Faculty;
import com.uni.info.service.FacultyService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Void> updateFaculty(@PathVariable Long fac_id, @RequestBody FacultyDto facultyDto) {
        facultyService.updateFaculty(fac_id, facultyDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{fac_id}")
    public ResponseEntity<?> deleteFaculty(@PathVariable Long fac_id) {
        try {
            facultyService.deleteFaculty(fac_id);
            return ResponseEntity.ok("Faculty deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
