package com.uni.info.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class DepartmentDto {
    private Long dep_id;
    private String departmentName;
    private Long u_id;
}
