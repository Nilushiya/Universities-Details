package com.uni.info.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class CourseDto {
    private Long course_id;
    private String courseName;
    private Long d_id;
}
