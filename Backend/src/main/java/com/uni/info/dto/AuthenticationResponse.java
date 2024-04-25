package com.uni.info.dto;

import lombok.*;

@Data
@Getter
@Setter

public class AuthenticationResponse {
    private String token;
    public AuthenticationResponse(String token){
        this.token = token;
    }

    public String getToken(){
        return  token;
    }
}
