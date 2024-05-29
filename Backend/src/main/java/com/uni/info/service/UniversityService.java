package com.uni.info.service;

import com.uni.info.dto.UniversityDto;
import com.uni.info.entity.University;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public interface UniversityService {
    UniversityDto createUniversities(UniversityDto universityDto) throws Exception;

    List<University> getUniversities();

    int updateuniname(Long uniId, String uniName);

    void deleteUniversity(Long uniId);
}
