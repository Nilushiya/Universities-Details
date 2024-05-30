package com.uni.info.service;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.entity.Department;

import java.util.List;

public interface DepartmentService {
    DepartmentDto createDepartment(DepartmentDto departmentDto);


    List<Department> groupDepartment(Long f_id);

    List<Department> getDepartment();

    void updateDepartment(Long depId, DepartmentDto departmentDto);

    void deleteDepartment(Long depId);

    List<Object[]> getwithAll();
}
