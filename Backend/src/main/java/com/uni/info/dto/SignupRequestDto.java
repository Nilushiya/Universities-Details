package com.uni.info.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SignupRequestDto {
    private String name;
    private String email;
    private String password;
    private String userType;
}
