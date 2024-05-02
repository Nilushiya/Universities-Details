package com.uni.info.controller;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.entity.Department;
import com.uni.info.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/gruopedepartment/{f_id}")
    public List<Department> groupOfDepartment(@PathVariable Long f_id){
        return departmentService.groupDepartment(f_id);
    }
}
