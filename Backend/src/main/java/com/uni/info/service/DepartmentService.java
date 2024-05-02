package com.uni.info.service;

import com.uni.info.dto.DepartmentDto;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);

    void updateFaculty(Long depId, String departmentName);
}
