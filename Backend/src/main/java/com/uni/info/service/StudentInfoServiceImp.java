package com.uni.info.service;

import com.uni.info.dto.StudentInfoDto;
import com.uni.info.entity.English_details;
import com.uni.info.entity.StudentInfo;
import com.uni.info.exception.DuplicateStudentIdException;
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
        studentInfo.setAddress(address.trim().toLowerCase());
        studentInfo.setSelected_university(selectedUniversity.trim().toLowerCase());
        studentInfo.setGender(gender.trim().toLowerCase());
        studentInfo.setLanguage(language.trim().toLowerCase());
        studentInfo.setPhone(phone);
        studentInfo.setAcademic_year(academicYear);
        studentInfo.setSelected_course(selectedCourse.trim().toLowerCase());

//        System.out.println("studentInfo   : "+ studentInfo);
        Optional<StudentInfo> existingStudent = studentInfoRepo.findStuById(stuId);
        System.out.println("existingStudent"+existingStudent);
        if (existingStudent.isPresent()){
            // Handle duplicate case
            throw new DuplicateStudentIdException("Duplicate student ID: " + stuId);
        } else {
            // Save new student information
            return studentInfoRepo.save(studentInfo);
        }

    }

    @Override
    public List<Object[]> getstudentsByYear(String academicYear) {
        System.out.println(" findGroupByYear:" + studentInfoRepo.findGroupByYear(academicYear));
        return studentInfoRepo.findGroupByYear(academicYear);
    }

    @Override
    public List<Object[]> getUniversities(String academic_year, String selected_university) {
        return studentInfoRepo.findUniversity(academic_year, selected_university.toLowerCase());
    }

    @Override
    public List<Object[]> getLanguage(String academicYear, String selectedUniversity, String language) {
        return studentInfoRepo.findLanguage(academicYear, selectedUniversity , language);
    }

    @Override
    public List<Object[]> getCusromer(Long stu_id) {
        System.out.println("id : "+stu_id);
        System.out.println("idss : "+studentInfoRepo.findFriend(stu_id));

        return studentInfoRepo.findFriend(stu_id);
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

    @Override
    public StudentInfo update(Long stuId, StudentInfoDto studentInfoDto) {
        return studentInfoRepo.findStuById(stuId)
                .map(user -> {
                    if (studentInfoDto.getAddress() != null) user.setAddress(studentInfoDto.getAddress());
                    if (studentInfoDto.getPhone() != null) user.setPhone(studentInfoDto.getPhone());
                    return studentInfoRepo.save(user);
                })
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public List<Object[]> getCourse(String academicYear, String selectedUniversity, String language, String selectedCourse) {
        return studentInfoRepo.findCourse(academicYear, selectedUniversity , language ,selectedCourse);
    }

    @Override
    public byte[] getStudentPdf(Long studentinfo_id) {
            StudentInfo studentInfo = studentInfoRepo.findById(studentinfo_id)
                    .orElseThrow(() -> new RuntimeException("Student not found with id " + studentinfo_id));
            return studentInfo.getImage();
    }

    @Override
    public List<Object[]> check_info(Long stuId) {
        List<Object[]> user= studentInfoRepo.checkuser(stuId);
        if(user.isEmpty()){
            return null;
        }
        else {
            return user;
        }
    }


}
