//package com.uni.info.service;
//
//import com.uni.info.dto.DegreeDto;
//import com.uni.info.entity.Degree;
//import com.uni.info.exception.DegreeServiceException;
//import com.uni.info.exception.DepartmentServiceException;
//import com.uni.info.repository.DegreeRepo;
//import lombok.AllArgsConstructor;
//import org.springframework.beans.BeanUtils;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//@Service
//
//
//public class DegreeServiceImp implements DegreeService{
//    @Autowired
//    private DegreeRepo degreeRepo;
//    @Overridea
//    public DegreeDto createDegrees(DegreeDto degreeDto) throws DegreeServiceException {
//    try{
//        Degree degree = new Degree();
//        BeanUtils.copyProperties(degreeDto , degree);
//        degreeRepo.save(degree);
//        return degreeDto;
//    }
//    catch (Exception e){
//        throw new DegreeServiceException("Failed to create degree: " + e.getMessage());
//    }
//
//    }
//
//    @Override
//    public List<Degree> getDegrees() {
//        return degreeRepo.findAll();
//    }
//}
