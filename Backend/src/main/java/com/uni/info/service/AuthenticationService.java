package com.uni.info.service;

import com.uni.info.dto.AuthenticationResponse;
import com.uni.info.dto.SigninRequestDto;
import com.uni.info.dto.SignupRequestDto;
import com.uni.info.entity.Role;
import com.uni.info.entity.Student;
import com.uni.info.repository.StudentRepo;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service

public class AuthenticationService {
    private final StudentRepo studentRepo;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(StudentRepo studentRepo, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
        this.studentRepo = studentRepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
    }


    public String register(SignupRequestDto request){
        Student user = new Student();
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setUserType(Role.valueOf(request.getUserType()));
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        studentRepo.save(user);
        String token = jwtService.generateToken(user);

        return token;
    }
    public AuthenticationResponse authenticate(SigninRequestDto request){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                ));

        Student user = studentRepo.findByEmail(request.getEmail()).orElseThrow();
        String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);

    }


    public boolean signinVerify(SigninRequestDto request) {
        System.out.println("re  : "+request);
        String userEmail = request.getEmail();
        System.out.println("userEmail" + userEmail);
        Optional<Student> userOptional = studentRepo.findByEmail(userEmail);
        System.out.println("ddd :"+userOptional );
        if (userOptional.isPresent()) {
            Student user = userOptional.get();
            System.out.println("user :"+user);

            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            if(passwordEncoder.matches(request.getPassword(), user.getPassword())){
                System.out.println("lll");

                return true;
            }
            else{
                System.out.println("fff");

                return false;
            }

        }
        else{
            return false;
        }
}}
