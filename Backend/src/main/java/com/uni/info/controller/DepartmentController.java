package com.uni.info.controller;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.dto.FacultyDto;
import com.uni.info.entity.Department;
import com.uni.info.entity.Faculty;
import com.uni.info.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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


    @GetMapping("/get")
    public List<Department> getAllDepartmeny() {
        return departmentService.getDepartment();
    }
    @GetMapping("/gruopedepartment/{f_id}")
    public List<Department> groupOfDepartment(@PathVariable Long f_id){
        return departmentService.groupDepartment(f_id);
    }
    @GetMapping("/getAll")
    public List<Object[]> getWithUniName() {
        return departmentService.getwithAll();
    }
    @PutMapping("/updateDepartment/{dep_id}")
    public ResponseEntity<Void> updateDepartment(@PathVariable Long dep_id, @RequestBody DepartmentDto departmentDto) {
        departmentService.updateDepartment(dep_id, departmentDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/delete/{dep_id}")
    public ResponseEntity<?> deleteDepartment(@PathVariable Long dep_id) {
        try {
            departmentService.deleteDepartment(dep_id);
            return ResponseEntity.ok("Department deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
