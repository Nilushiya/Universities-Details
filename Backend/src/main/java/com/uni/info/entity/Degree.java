//package com.uni.info.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//
//@Entity
//@Data
////@AllArgsConstructor
////@NoArgsConstructor
//public class Degree {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long degree_id;
//    private String degreeName;
//    private Long d_id;
//    @ManyToOne
//    @JoinColumn(name = "d_id", referencedColumnName = "dep_id")
//    private Department department;
//}
