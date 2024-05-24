package com.uni.info.service;

import com.uni.info.entity.StudentInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface StudentInfoService {
    StudentInfo createStuDetails(Long stuId, MultipartFile image, String address, String selectedUniversity, String gender, String language, Integer phone, String academicYear, String selectedCourse) throws IOException;

    List<Object[]> getstudentsByYear(String academicYear);

    List<Object[]> getUniversities(String academicYear, String selectedUniversity);

    List<Object[]> getLanguage(String academicYear, String selectedUniversity, String language);

    List<Object[]> getCusromer(Long stu_id);


    List<StudentInfo> updateStudentInformation(Long studentinfo_id, MultipartFile image, String address, String selectedUniversity, String gender, String language, Integer phone, String academicYear, String selectedCourse) throws IOException;
}
