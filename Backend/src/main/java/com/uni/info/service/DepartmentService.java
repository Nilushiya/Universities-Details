package com.uni.info.service;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.entity.Department;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    void updateFaculty(Long depId, String departmentName);

    List<Department> groupDepartment(Long f_id);

    List<Department> getDepartment();
}
