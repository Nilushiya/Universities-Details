package com.uni.info.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacultyDto {
    private Long fac_id;
    private String facultyName;
    private Long u_id;
}
