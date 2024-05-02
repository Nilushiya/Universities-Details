package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dep_id;
    private String departmentName;
    private Long f_id;

//    @ManyToOne
//    @JoinColumn(name = "f_id", referencedColumnName = "fac_id")
//    private Faculty faculty;

}
