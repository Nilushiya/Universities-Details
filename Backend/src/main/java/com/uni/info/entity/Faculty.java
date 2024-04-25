package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long fac_id;
    private String facultyName;

    @ManyToOne
    @JoinColumn(name = "u_id", referencedColumnName = "uni_id")
    private University university;
}
