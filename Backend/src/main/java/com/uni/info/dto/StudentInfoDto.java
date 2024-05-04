package com.uni.info.dto;

import jakarta.persistence.Lob;
import lombok.*;

@Data
@AllArgsConstructor
public class StudentInfoDto {
    private Long studentinfo_id;
    private String address;
    private String selected_university;
    private String gender;
    private String language;
    private Integer phone;
    private byte[] image;
    private String academic_year;
    private String selected_course;
    private Long stu_id;
}
