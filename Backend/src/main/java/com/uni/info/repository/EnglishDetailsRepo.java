package com.uni.info.repository;

import com.uni.info.entity.English_details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface EnglishDetailsRepo extends JpaRepository<English_details, Long> {

//    English_details update(English_details englishDetails);
}
