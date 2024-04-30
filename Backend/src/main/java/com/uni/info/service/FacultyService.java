package com.uni.info.service;

import com.uni.info.dto.UniversityDto;
import com.uni.info.entity.University;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface FacultyService {
    List<University> getFaculties();

    UniversityDto createFaculties(UniversityDto universityDto);
}
