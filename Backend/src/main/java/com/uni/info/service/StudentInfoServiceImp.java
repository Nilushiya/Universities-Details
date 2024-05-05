package com.uni.info.service;

import com.uni.info.dto.StudentInfoDto;
import com.uni.info.entity.StudentInfo;
import com.uni.info.repository.StudentInfoRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class StudentInfoServiceImp implements StudentInfoService{
    @Autowired
    private StudentInfoRepo studentInfoRepo;

    @Override
    public StudentInfo createStuDetails(Long stuId, MultipartFile image, String address, String selectedUniversity, String gender, String language, Integer phone, String academicYear, String selectedCourse) throws IOException {
        StudentInfo studentInfo = new StudentInfo();
        studentInfo.setStu_id(stuId);
        studentInfo.setImage(image.getBytes());
        studentInfo.setAddress(address);
        studentInfo.setSelected_university(selectedUniversity);
        studentInfo.setGender(gender);
        studentInfo.setLanguage(language);
        studentInfo.setPhone(phone);
        studentInfo.setAcademic_year(academicYear);
        studentInfo.setSelected_course(selectedCourse);

//        System.out.println("studentInfo   : "+ studentInfo);

        return studentInfoRepo.save(studentInfo);
    }

    @Override
    public List<StudentInfo> getstudentsByYear(String academicYear) {
        System.out.println(" findGroupByYear:" + studentInfoRepo.findGroupByYear(academicYear));
        return studentInfoRepo.findGroupByYear(academicYear);
    }

    @Override
    public List<StudentInfo> getUniversities(String academicYear, String selectedUniversity) {
        return studentInfoRepo.findUniversity(academicYear, selectedUniversity);
    }

    @Override
    public List<StudentInfo> getLanguage(String academicYear, String selectedUniversity, String language) {
        return studentInfoRepo.findLanguage(academicYear, selectedUniversity , language);
    }


}
