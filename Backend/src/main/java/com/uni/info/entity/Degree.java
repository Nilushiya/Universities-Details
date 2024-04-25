package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long course_id;
    private String courseName;

    @ManyToOne
    @JoinColumn(name = "d_id", referencedColumnName = "dep_id")
    private Department department;
}
