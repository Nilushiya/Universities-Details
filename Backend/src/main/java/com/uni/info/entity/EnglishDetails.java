package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NamedEntityGraph
@Getter
@Setter


public class EnglishDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long edetails_id;
    private Integer edegreeDuration;
    private String image;
    private String edegreeDescription1;
    private String edegreeDescription2;
    private String edegreeJobs;

    @ManyToOne
    @JoinColumn(name = "edeg_id", referencedColumnName = "degree_id")
    private Degree degree;

}
