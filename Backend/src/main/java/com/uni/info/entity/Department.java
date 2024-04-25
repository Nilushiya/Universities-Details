package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long dep_id;
    private String departmentName;

    @ManyToOne
    @JoinColumn(name = "f_id", referencedColumnName = "fac_id")
    private Faculty faculty;

}
