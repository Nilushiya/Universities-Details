package com.uni.info.controller;

import com.uni.info.dto.AuthenticationResponse;
import com.uni.info.dto.SigninRequestDto;
import com.uni.info.dto.SignupRequestDto;
import com.uni.info.entity.Student;
import com.uni.info.service.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class AuthenticationController {
    private  final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/register")
    public ResponseEntity<Student> register(
            @RequestBody SignupRequestDto request
            ){
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody SigninRequestDto request
    ){
        System.out.println("rrr"+request);
        if(!authenticationService.signinVerify(request)){
            System.out.println("faild");
            System.out.println(ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null));
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        else{
            System.out.println("okeeee");
            return ResponseEntity.ok(authenticationService.authenticate(request));
        }
    }
}

