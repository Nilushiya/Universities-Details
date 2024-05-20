package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;
import org.w3c.dom.Text;

@Entity
@Data
@Table(name = "english_details")
public class English_details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long edetails_id;
    private Integer edegree_duration;
    private String degree;
    private String image_name;
    @Lob
    private byte[] image_data;
    @Column(columnDefinition = "TEXT", nullable = false)
    private String edegree_description1;
    private String edegree_jobs;
    private Long edeg_id;
//    @ManyToOne
//    @JoinColumn(name = "edeg_id", referencedColumnName = "degree_id")
//    private Degree degree;

}
