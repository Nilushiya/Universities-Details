package com.uni.info.service;

import com.uni.info.dto.DepartmentDto;
import com.uni.info.entity.Department;
import com.uni.info.exception.DepartmentServiceException;
import com.uni.info.repository.DepartmentRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentServiceImp implements DepartmentService{
    @Autowired
    private DepartmentRepo departmentRepo;
    @Override
    public String createDepartment(DepartmentDto departmentDto) throws DepartmentServiceException {
        try {
            List<Object[]> isFac_id = departmentRepo.isFacId(departmentDto.getF_id());
            if(!isFac_id.isEmpty()){
                Department existDepartment = departmentRepo.findExistdep(departmentDto.getDepartmentName(),departmentDto.getF_id());

                if(existDepartment != null){
                    return "Department with the same name and Faculty ID already exists.";
                }
                else{
                    Department department = new Department();
                    BeanUtils.copyProperties(departmentDto, department);
                    department.setDepartmentName(departmentDto.getDepartmentName());
                    department.setF_id(departmentDto.getF_id());
                    Department savedDepartment = departmentRepo.save(department);
                    departmentDto.setDep_id(savedDepartment.getDep_id());

                    return "added successfully";}
            }
            else {
                return "there is no related Faculty id.";
            }

        } catch (Exception e) {
            throw new DepartmentServiceException("Failed to create department: " + e.getMessage());
        }
    }

    @Override
    public List<Department> groupDepartment(Long f_id) {
        return departmentRepo.groupDep(f_id);
    }

    @Override
    public List<Department> getDepartment() {
        return departmentRepo.findAll();
    }

    @Override
    public void updateDepartment(Long depId, DepartmentDto departmentDto) {
        departmentRepo.update(depId, departmentDto.getDepartmentName(), departmentDto.getF_id());
    }

    @Override
    public void deleteDepartment(Long depId) {
        departmentRepo.deleteById(depId);
    }

    @Override
    public List<Object[]> getwithAll() {
        return departmentRepo.findAllDetails();
    }
}
