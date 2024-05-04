package com.uni.info.controller;

import com.uni.info.dto.EnglishDetailsDto;
import com.uni.info.entity.English_details;
import com.uni.info.service.EnglishDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/EngDetails")

public class EnglishDetailsController {
    @Autowired
    private EnglishDetailsService englishDetailsService;

    @PostMapping("/")
    public ResponseEntity<?> createEnglishDetails(@RequestParam("edegree_duration") Integer edegree_duration,
                                                  @RequestParam("image_data") MultipartFile image_data,
                                                  @RequestParam("edegree_description1") String edegree_description1,
                                                  @RequestParam("edegree_jobs") String edegree_jobs,
                                                  @RequestParam("edeg_id") Long edeg_id) {
        try {
            English_details createdEnglishDetails = englishDetailsService.createEnglishDetails(edegree_duration,image_data, edegree_description1, edegree_jobs, edeg_id);
            return new ResponseEntity<>(createdEnglishDetails, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public List<English_details> getEnglishDetails(){
        return englishDetailsService.getEngDetails();
    }

    @PutMapping("/update/{edetails_id}")
    public List<English_details> updateEngDetails(@PathVariable ("edetails_id") Long edetails_id ,@RequestParam("edegree_duration") Integer edegree_duration,
                                                  @RequestParam("image_data") MultipartFile image_data,
                                                  @RequestParam("edegree_description1") String edegree_description1,
                                                  @RequestParam("edegree_jobs") String edegree_jobs,
                                                  @RequestParam("edeg_id") Long edeg_id) throws IOException {
        List<English_details> saveUpdate =  englishDetailsService.updateDetails(edetails_id ,edegree_duration,image_data, edegree_description1, edegree_jobs, edeg_id);
        return saveUpdate;
    }

    }
//    public ResponseEntity<String> createEngDetails(@RequestParam(value = "imageData") MultipartFile file,
//                                                           @RequestParam("edegreeDuration") Integer edegreeDuration,
//                                                           @RequestParam("edegreeDescription1") String edegreeDescription1,
//                                                           @RequestParam("edegreeJobs") String edegreeJobs,
//                                                           @RequestParam("edeg_id") Long edeg_id) throws IOException {
//
//     try {
//             if (file != null) {
//                 englishDetailsService.saveDetailsFromFile(file, edegreeDuration, edegreeDescription1, edegreeJobs, edeg_id);            }
//              else {
//                 System.out.println("eeee : "+file);
//                    return ResponseEntity.badRequest().body("Either 'file' or 'imageUrl' parameter is required.");
//            }
//                    return ResponseEntity.ok("Image uploaded successfully.");
//        } catch (IOException e) {
//         System.out.println("err :"+e.getMessage());
//         System.out.println("erroer :"+file);
//        e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload image.");
//        }
//}

