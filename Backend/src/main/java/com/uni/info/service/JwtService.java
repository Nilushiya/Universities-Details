package com.uni.info.service;

import com.uni.info.entity.Student;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;
@Component

public class JwtService {
    private final String SECRET_KEY = "a190a9df31ddde5f2c97972111db150d1ec7b5bc89961fac622cc670f5e1c862";

    public String extractUsername(String token){
        return extractClaim(token,Claims::getSubject);
    }

    public boolean isValid(String token , UserDetails user){
        String username = extractUsername(token);
        return (username.equals(user.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return  extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token , Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> resolver){
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }
    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSigninKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
    public String generateToken(Student student,String userType, Long studentId){
        String token = Jwts
                .builder()
//                .subject(student.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 24*60*60*1000*5))
                .claim("userType",userType)
                .claim("studentId",studentId)
                .signWith(getSigninKey())
                .compact();

        return token;
    }

    private SecretKey getSigninKey(){
        byte[] keyBytes =Decoders.BASE64URL.decode(SECRET_KEY);
            return Keys.hmacShaKeyFor(keyBytes);
        }



}
