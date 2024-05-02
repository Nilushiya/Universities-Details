package com.uni.info.controller;

import com.uni.info.service.EnglishDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/EngDetails")

public class EnglishDetailsController {
    @Autowired
    private EnglishDetailsService englishDetailsService;

    @PostMapping("/")
    public ResponseEntity<?> createEngDetails(@RequestParam(value = "file", required = false) MultipartFile file,
                                                           @RequestParam(value = "imageUrl", required = false) String imageUrl,
                                                           @RequestParam("edegreeDuration") Integer edegreeDuration,
                                                           @RequestParam("edegreeDescription1") String edegreeDescription1,
                                                           @RequestParam("edegreeJobs") String edegreeJobs,
                                                           @RequestParam("edeg_id") Long edeg_id) throws IOException {
        if (file != null) {
            englishDetailsService.saveDetailsFromFile(file, edegreeDuration, edegreeDescription1, edegreeJobs, edeg_id);
        }
//        else if (imageUrl != null && !imageUrl.isEmpty()) {
//            englishDetailsService.saveDetailsUrl(imageUrl, edegreeDuration, edegreeDescription1, edegreeJobs, edeg_id);
//        }
        else {
            englishDetailsService.saveDetailsUrl(imageUrl, edegreeDuration, edegreeDescription1, edegreeJobs, edeg_id);

        }
        return ResponseEntity.ok("Created");
    }
}
