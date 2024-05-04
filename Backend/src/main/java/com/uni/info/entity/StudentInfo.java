package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "Student_info")
public class StudentInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentinfo_id;
    private String address;
    private String selected_university;
    private String gender;
    private String language;
    private Integer phone;
    @Lob
    private byte[] image;
    private String academic_year;
    private String selected_course;
    private Long stu_id;
//    @ManyToOne
//    @JoinColumn(name = "stu_id", referencedColumnName = "studentId")
//    private Student student;
}