package com.uni.info.repository;

import com.uni.info.entity.University;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UniversityRepo extends JpaRepository<University, Long> {
    @Modifying
    @Transactional
    @Query("update University u set u.uniName = :uniName where u.uni_id = :uni_id")
    void updateUniversity(@Param("uni_id") Long uni_id,@Param("uniName") String uniName);
}
