package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
public class Degree {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long degree_id;
    private String degreeName;

    @ManyToOne
    @JoinColumn(name = "d_id", referencedColumnName = "dep_id")
    private Department department;
}
