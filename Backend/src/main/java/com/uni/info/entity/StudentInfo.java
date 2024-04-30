package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Getter
@Setter

public class StudentInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentInfoId;

    private String address;

    private String selectedUniversity;

    private String gender;

    private String language;

    private String selectedCourse;

    @ManyToOne
    @JoinColumn(name = "stu_id", referencedColumnName = "studentId")
    private Student student;
}