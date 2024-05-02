package com.uni.info.dto;

import lombok.*;

@Data
@AllArgsConstructor
public class EnglishDetailsDto {
    private Long edetails_id;
    private Integer edegreeDuration;
    private byte[] imageData;
    private String edegreeDescription1;
    private String edegreeJobs;
    private Long edeg_id;
}
