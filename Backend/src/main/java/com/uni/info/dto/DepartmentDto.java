package com.uni.info.dto;

import lombok.*;

@Data
@AllArgsConstructor
public class DepartmentDto {
    private Long dep_id;
    private String departmentName;
    private Long f_id;
}
