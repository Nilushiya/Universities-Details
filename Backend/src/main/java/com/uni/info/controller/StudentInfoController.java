package com.uni.info.controller;

import com.uni.info.dto.StudentInfoDto;
import com.uni.info.entity.English_details;
import com.uni.info.entity.StudentInfo;
import com.uni.info.service.StudentInfoService;
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
@RequestMapping("/api/v1/studentInfo")

public class StudentInfoController {
    @Autowired
    private StudentInfoService studentInfoService;
    @PostMapping("/{stu_id}")
    public ResponseEntity<?> createDetails(@PathVariable ("stu_id") Long stu_id,
                                           @RequestParam ("image") MultipartFile image,
                                           @RequestParam ("address") String address,
                                           @RequestParam("selected_university") String selected_university,
                                           @RequestParam("gender") String gender,
                                           @RequestParam("language") String language,
                                           @RequestParam("phone") Integer phone,
                                           @RequestParam("academic_year") String academic_year,
                                           @RequestParam("selected_course") String selected_course){
        try{
            System.out.println("contoller");
            StudentInfo createStudentInfo =  studentInfoService.createStuDetails(stu_id , image ,address ,selected_university ,gender ,language ,phone ,academic_year ,selected_course);
            System.out.println("createStudentInfo : " + createStudentInfo);
            return new ResponseEntity<>(createStudentInfo, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/groupbyyear/{academic_year}")
    public List<Object[]> getGroupByYear(@PathVariable ("academic_year") String academic_year){
        return studentInfoService.getstudentsByYear(academic_year);
    }

    @GetMapping("/groupbyuni/{academic_year}/{selected_university}")
    public List<Object[]> getUniversity(@PathVariable("academic_year") String academic_year, @PathVariable("selected_university") String selected_university){
        return studentInfoService.getUniversities(academic_year,selected_university);
    }

    @GetMapping("/groupbylanguage/{academic_year}/{selected_university}/{language}")
    public List<Object[]> getLanguage(@PathVariable("academic_year") String academic_year, @PathVariable("selected_university") String selected_university , @PathVariable("language") String language){
        return studentInfoService.getLanguage(academic_year,selected_university, language);
    }
    @GetMapping("/findfriend/{studentinfo_id}")
    public List<Object[]> getOneFriend(@PathVariable("studentinfo_id") Long studentinfo_id){
        return studentInfoService.getfriend(studentinfo_id);
    }

    @PutMapping("/update/{studentinfo_id}")
    public List<StudentInfo> updateStudentInfo(@PathVariable ("studentinfo_id") Long studentinfo_id,
                                           @RequestParam ("image") MultipartFile image,
                                           @RequestParam ("address") String address,
                                           @RequestParam("selected_university") String selected_university,
                                           @RequestParam("gender") String gender,
                                           @RequestParam("language") String language,
                                           @RequestParam("phone") Integer phone,
                                           @RequestParam("academic_year") String academic_year,
                                           @RequestParam("selected_course") String selected_course) throws IOException {
        List<StudentInfo> saveUpdate =  studentInfoService.updateStudentInformation(studentinfo_id , image ,address ,selected_university ,gender ,language ,phone ,academic_year ,selected_course);
        return saveUpdate;
    }

//    @GetMapping("/{imageId}")
//    public ResponseEntity<byte[]> downloadImage(@PathVariable Long imageId) {
//        byte[] imageData = imageService.getImageDataById(imageId);
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.IMAGE_JPEG); // or MediaType.IMAGE_PNG, depending on your image format
//        headers.setContentLength(imageData.length);
//        return new ResponseEntity<>(imageData, headers, HttpStatus.OK);
//    }
}
