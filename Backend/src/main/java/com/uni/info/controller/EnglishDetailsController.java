package com.uni.info.controller;

import com.uni.info.dto.EnglishDetailsDto;
import com.uni.info.entity.English_details;
import com.uni.info.service.EnglishDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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


    @GetMapping("getDetails/{edeg_id}")
    public List<English_details> getDetail(@PathVariable ("edeg_id") Long edeg_id){
    List<English_details> details = englishDetailsService.courseDetail(edeg_id);
    return details;
    }

    @GetMapping("/image/{edeg_id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long edeg_id) {
        System.out.println("Hoo");
        English_details image = englishDetailsService.getImage(edeg_id);
        if (image != null) {
            System.out.println("if oooooooo");
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + image.getImage_name() + "\"")
                    .body(image.getImage_data());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

}


//    @GetMapping("get")