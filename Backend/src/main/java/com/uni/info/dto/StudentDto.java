package com.uni.info.dto;

import com.uni.info.entity.Student;
import com.uni.info.enums.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Data;

import java.time.LocalDateTime;
@Data
public class StudentDto {
    private Long studentId;
    private String name;
    private String email;
    private String password;
    private Role userType;
    private Boolean isActive = true;
    private Integer loginCount;
}
