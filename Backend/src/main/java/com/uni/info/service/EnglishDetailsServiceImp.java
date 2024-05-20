package com.uni.info.service;

import com.uni.info.dto.EnglishDetailsDto;
import com.uni.info.entity.English_details;
import com.uni.info.repository.EnglishDetailsRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service

public class EnglishDetailsServiceImp implements EnglishDetailsService {
    @Autowired
    private EnglishDetailsRepo englishDetailsRepo;

    @Override
    public English_details createEnglishDetails(Integer edegreeDuration, MultipartFile imageData, String edegreeDescription1, String edegreeJobs,String degree, Long edeg_id) {
        try {
            English_details englishDetails = new English_details();
            englishDetails.setEdegree_duration(edegreeDuration);
            englishDetails.setImage_name(imageData.getOriginalFilename());
            System.out.println("namee"+imageData.getOriginalFilename());
            englishDetails.setImage_data(imageData.getBytes());
            englishDetails.setEdegree_description1(edegreeDescription1);
            englishDetails.setEdegree_jobs(edegreeJobs);
            englishDetails.setDegree(degree);
            englishDetails.setEdeg_id(edeg_id);
            return englishDetailsRepo.save(englishDetails);
        } catch (Exception e) {
            throw new RuntimeException("Failed to create EnglishDetails: " + e.getMessage());
        }
    }

    @Override
    public List<English_details> getEngDetails() {
        return englishDetailsRepo.findAll();
    }

    @Override
    public List<English_details> updateDetails(Long edetailsId, Integer edegreeDuration, MultipartFile imageData, String edegreeDescription1, String edegreeJobs,String degree, Long edegId) throws IOException {
        Optional<English_details> detailsId = englishDetailsRepo.findById(edetailsId);
        if (detailsId.isPresent()) {
            System.out.println("Present");
            English_details englishDetails = detailsId.get();
            englishDetails.setEdegree_duration(edegreeDuration);
            englishDetails.setImage_data(imageData.getBytes());
            englishDetails.setEdegree_description1(edegreeDescription1);
            englishDetails.setEdegree_jobs(edegreeJobs);
            englishDetails.setDegree(degree);
            englishDetails.setEdeg_id(edegId);
            return Collections.singletonList(englishDetailsRepo.save(englishDetails));
//            return Collections.singletonList(englishDetailsRepo.update(englishDetails));
        } else {
            throw new EntityNotFoundException("English_details not found with id: " + edetailsId);
        }
    }

    @Override
    public List<English_details> courseDetail(Long edeg_id) {
        return englishDetailsRepo.findCourse(edeg_id);
    }

    @Override
    public English_details getImage(Long edeg_id) {
        Optional<English_details> optionalImage = englishDetailsRepo.findByEdegId(edeg_id);
        return optionalImage.orElse(null);
    }

}