package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class EnglishDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long edetails_id;
    private Integer edegreeDuration;
    @Lob
    private byte[] imageData;
    private String edegreeDescription1;
    private String edegreeJobs;
    private Long edeg_id;
//    @ManyToOne
//    @JoinColumn(name = "edeg_id", referencedColumnName = "degree_id")
//    private Degree degree;

}
