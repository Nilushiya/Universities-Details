package com.uni.info.repository;

import com.uni.info.entity.StudentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentInfoRepo extends JpaRepository<StudentInfo , Long> {
    @Query("SELECT s , st FROM StudentInfo s JOIN Student st ON s.stu_id = st.studentId where s.academic_year = :academicYear")
    List<Object[]> findGroupByYear(String academicYear);
    @Query("Select s , st FROM StudentInfo s JOIN Student st ON s.stu_id = st.studentId where s.academic_year = :academicYear and s.selected_university = :selectedUniversity")
    List<Object[]> findUniversity(String academicYear, String selectedUniversity);
    @Query("Select s , st FROM StudentInfo s JOIN Student st ON s.stu_id = st.studentId where s.academic_year = :academicYear and s.selected_university = :selectedUniversity and s.language = :language")

    List<Object[]> findLanguage(String academicYear, String selectedUniversity, String language);
    @Query("Select s , st FROM StudentInfo s JOIN Student st ON s.stu_id = st.studentId where s.studentinfo_id = :studentinfoId")

    List<Object[]> findFriend(Long studentinfoId);
    @Query("SELECT s FROM StudentInfo s WHERE s.stu_id = :stuId")
    StudentInfo findStuById(@Param("stuId") Long stuId);
}
