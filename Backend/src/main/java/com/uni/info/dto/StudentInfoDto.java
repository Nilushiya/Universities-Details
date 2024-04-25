package com.uni.info.dto;

import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class StudentInfoDto {

    private String address;

    private String selectedUniversity;

    private String gender;

    private String language;

    private String selectedCourse;
}
