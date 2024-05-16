package com.uni.info.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class SignupRequestDto {
    private String customerName;
    private String email;
    private String password;
    private String userType;
}
