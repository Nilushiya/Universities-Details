package com.uni.info.repository;

import com.uni.info.entity.English_details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface EnglishDetailsRepo extends JpaRepository<English_details, Long> {
    @Query("Select e from English_details e where e.edeg_id = :edeg_id")
    List<English_details> findCourse(@Param("edeg_id") Long edeg_id);


//    English_details update(English_details englishDetails);
}
