package com.uni.info.repository;

import com.uni.info.entity.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
public interface FacultyRepo extends JpaRepository<Faculty , Long> {
}
