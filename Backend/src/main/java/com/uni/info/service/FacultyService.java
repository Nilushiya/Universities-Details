package com.uni.info.service;

import com.uni.info.dto.FacultyDto;
import com.uni.info.entity.Faculty;
import com.uni.info.exception.FacultyServiceException;
import org.springframework.stereotype.Service;

import java.util.List;


public interface FacultyService {
    List<Faculty> getFaculties();

    FacultyDto createFaculties(FacultyDto facultyDto) throws FacultyServiceException;

    List<Faculty> groupedByUniversity(Long u_id);

    void updateFaculty(Long facId, String facultyName);

    void deleteFaculty(Long facId);
}
