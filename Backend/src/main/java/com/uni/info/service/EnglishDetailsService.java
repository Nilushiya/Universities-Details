package com.uni.info.service;

import com.uni.info.dto.EnglishDetailsDto;
import com.uni.info.entity.English_details;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service

public interface EnglishDetailsService {
    English_details createEnglishDetails(Integer edegreeDuration, MultipartFile imageData, String edegreeDescription1, String edegreeJobs,String degree, Long edegId);

    List<English_details> getEngDetails();


    List<English_details> updateDetails(Long edetailsId, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs,String degree, Long edegId) throws IOException;

    List<English_details> courseDetail(Long edeg_id);

    English_details getImage(Long edeg_id);
//    english_details createEnglishDetails(Integer edegreeDuration, MultipartFile imageData, String edegreeDescription1, String edegreeJobs, Long edegId);
//    void saveDetailsFromFile(MultipartFile file, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException;
//
//    void saveDetailsUrl(String imageUrl, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException;




   
}
