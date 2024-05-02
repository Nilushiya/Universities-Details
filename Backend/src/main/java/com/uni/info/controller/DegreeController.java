//package com.uni.info.controller;
//
//import com.uni.info.dto.DegreeDto;
//import com.uni.info.dto.FacultyDto;
//import com.uni.info.entity.Degree;
//import com.uni.info.entity.Faculty;
//import com.uni.info.service.DegreeService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v1/degree")
//@RequiredArgsConstructor
//@CrossOrigin("*")
//
//public class DegreeController {
//    @Autowired
//    private DegreeService degreeService;
//    @PostMapping("/")
//    public DegreeDto createDegrees(@RequestBody DegreeDto degreeDto){
//        return degreeService.createDegrees(degreeDto);
//    }
//
//    @GetMapping("/get")
//    public List<Degree> getAllDegrees() {
//        return degreeService.getDegrees();
//    }
//}
