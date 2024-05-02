package com.uni.info.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service

public interface EnglishDetailsService {
    void saveDetailsFromFile(MultipartFile file, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException;

    void saveDetailsUrl(String imageUrl, Integer edegreeDuration, String edegreeDescription1, String edegreeJobs, Long edegId) throws IOException;
}
