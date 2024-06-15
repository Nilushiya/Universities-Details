package com.uni.info.service;

import com.uni.info.dto.FacultyDto;
import com.uni.info.entity.Faculty;
import com.uni.info.exception.FacultyServiceException;

import java.util.List;


public interface FacultyService {
    List<Faculty> getFaculties();

    String createFaculties(FacultyDto facultyDto) throws FacultyServiceException;

    List<Faculty> groupedByfaculty(Long u_id);

    void deleteFaculty(Long facId);

    void updateFaculty(Long facId, FacultyDto facultyDto);

    List<Object[]> getAllwithUni();
}
