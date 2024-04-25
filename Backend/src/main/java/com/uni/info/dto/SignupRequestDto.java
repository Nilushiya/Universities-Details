package com.uni.info.dto;
import lombok.Data;

@Data

public class SignupRequestDto {
    private String name;
    private String email;
    private String password;
    private String userType;
}
