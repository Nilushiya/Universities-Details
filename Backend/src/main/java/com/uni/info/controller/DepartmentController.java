package com.uni.info.controller;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/department")
@RequiredArgsConstructor
@CrossOrigin("*")

public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/post")
    public DepartmentDto createDep(@RequestBody DepartmentDto departmentDto){
        System.out.println(departmentService.createDepartment(departmentDto));
        return departmentService.createDepartment(departmentDto);
    }

    @PutMapping("/updatedepartment/{dep_id}")
    public String updatefac(@PathVariable Long dep_id , @RequestParam String departmentName){
        departmentService.updateFaculty(dep_id , departmentName);
        return "update okay";
    }
}
