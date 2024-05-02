package com.uni.info.repository;

import com.uni.info.entity.Faculty;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacultyRepo extends JpaRepository<Faculty , Long> {
    @Query("SELECT f FROM Faculty f WHERE f.uId = :uId")
    List<Faculty> groupByUniversity(@Param("uId") Long uId);
    @Modifying
    @Transactional
    @Query("update Faculty f set f.facultyName = :facultyName where f.fac_id = :fac_id")
    void update(@Param("fac_id") Long fac_id,@Param("facultyName") String facultyName);

}
