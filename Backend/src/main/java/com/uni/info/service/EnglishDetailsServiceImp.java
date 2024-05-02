package com.uni.info.service;

import com.uni.info.entity.EnglishDetails;
import com.uni.info.repository.EnglishDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service

public class EnglishDetailsServiceImp implements EnglishDetailsService{
    @Autowired
    private EnglishDetailsRepo englishDetailsRepo;
    @Override
    public void saveDetailsFromFile(MultipartFile file, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException {
            byte[] imageData = file.getBytes();
        EnglishDetails englishDetails = new EnglishDetails();
        englishDetails.setImageData(imageData);
        englishDetails.setEdegreeJobs(edegreeJobs);
        englishDetails.setEdegreeDuration(edegreeDuration);
        englishDetails.setEdeg_id(edegId);

        englishDetailsRepo.save(englishDetails);
        System.out.println("save okay file");
    }

    @Override
    public void saveDetailsUrl(String imageUrl, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException {
        byte[] imageData = downloadImage(imageUrl);
        EnglishDetails englishDetails = new EnglishDetails();
        englishDetails.setImageData(imageData);
        englishDetails.setEdegreeJobs(edegreeJobs);
        englishDetails.setEdegreeDuration(edegreeDuration);
        englishDetails.setEdeg_id(edegId);

        englishDetailsRepo.save(englishDetails);
        System.out.println("save okay URL");
    }

    private byte[] downloadImage(String imageUrl) throws IOException{
        URL url = new URL(imageUrl);
        return Files.readAllBytes(Paths.get(url.getFile()));
    }


}
