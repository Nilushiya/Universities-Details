package com.uni.info.repository;

import com.uni.info.entity.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentInfoRepo extends JpaRepository<StudentInfo , Long> {
    @Query("Select s from StudentInfo s where s.academic_year = :academicYear")
    List<StudentInfo> findGroupByYear(String academicYear);
    @Query("Select s from StudentInfo s where s.academic_year = :academicYear and s.selected_university = :selectedUniversity")
    List<StudentInfo> findUniversity(String academicYear, String selectedUniversity);
    @Query("Select s from StudentInfo s where s.academic_year = :academicYear and s.selected_university = :selectedUniversity and s.language = :language")

    List<StudentInfo> findLanguage(String academicYear, String selectedUniversity, String language);
}
