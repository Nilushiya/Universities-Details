package com.uni.info.service;

import com.uni.info.entity.English_details;
import com.uni.info.entity.StudentInfo;
import com.uni.info.repository.StudentInfoRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

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
    public List<Object[]> getstudentsByYear(String academicYear) {
        System.out.println(" findGroupByYear:" + studentInfoRepo.findGroupByYear(academicYear));
        return studentInfoRepo.findGroupByYear(academicYear);
    }

    @Override
    public List<Object[]> getUniversities(String academicYear, String selectedUniversity) {
        return studentInfoRepo.findUniversity(academicYear, selectedUniversity);
    }

    @Override
    public List<Object[]> getLanguage(String academicYear, String selectedUniversity, String language) {
        return studentInfoRepo.findLanguage(academicYear, selectedUniversity , language);
    }

    @Override
    public List<Object[]> getfriend(Long studentinfoId) {
//        System.out.println("id : "+studentinfoId);
        return studentInfoRepo.findFriend(studentinfoId);
    }

    @Override
    public List<StudentInfo> updateStudentInformation(Long studentinfo_id, MultipartFile image, String address, String selectedUniversity, String gender, String language, Integer phone, String academicYear, String selectedCourse) throws IOException {
        Optional<StudentInfo> findId = studentInfoRepo.findById(studentinfo_id);
        if(findId.isPresent()){
            StudentInfo studentInfo = findId.get();
            studentInfo.setImage(image.getBytes());
            studentInfo.setAddress(address);
            studentInfo.setGender(gender);
            studentInfo.setSelected_university(selectedUniversity);
            studentInfo.setPhone(phone);
            studentInfo.setLanguage(language);
            studentInfo.setSelected_course(selectedCourse);
            studentInfo.setAcademic_year(academicYear);

            return Collections.singletonList(studentInfoRepo.save(studentInfo));

        }
        else {
            throw new EntityNotFoundException("English_details not found with id: " + studentinfo_id);

         }
    }


}