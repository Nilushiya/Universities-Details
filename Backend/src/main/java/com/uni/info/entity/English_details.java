package com.uni.info.entity;

import jakarta.persistence.*;
import lombok.*;
import org.w3c.dom.Text;

@Entity
@Data
@Table(name = "EnglishDetails")
public class english_details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long edetails_id;
    private Integer edegree_duration;
//    @Lob
//    private byte[] image_data;
    private String edegree_description1;
    private String edegree_jobs;
    private Long edeg_id;
//    @ManyToOne
//    @JoinColumn(name = "edeg_id", referencedColumnName = "degree_id")
//    private Degree degree;

}
