package com.uni.info.repository;

import com.uni.info.entity.EnglishDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EnglishDetailsRepo extends JpaRepository<EnglishDetails, Long> {
}
