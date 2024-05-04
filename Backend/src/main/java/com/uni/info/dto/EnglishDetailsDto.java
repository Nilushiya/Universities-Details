package com.uni.info.dto;

import jakarta.persistence.Lob;
import lombok.*;

@Data
@AllArgsConstructor
public class EnglishDetailsDto {
    private Long edetails_id;
    private Integer edegree_duration;
    private byte[] image_data;
    private String edegree_description1;
    private String edegree_jobs;
    private Long edeg_id;
}
