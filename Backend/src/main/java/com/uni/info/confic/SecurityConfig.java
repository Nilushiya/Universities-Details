package com.uni.info.confic;

import com.uni.info.enums.Role;
import com.uni.info.service.StudentDetailsImp;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity

public class SecurityConfig {
    private final StudentDetailsImp studentDetailsImp;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    public SecurityConfig(StudentDetailsImp studentDetailsImp, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.studentDetailsImp = studentDetailsImp;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println(Role.ADMIN.name());
        return http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(

                        req -> req.requestMatchers("/login").permitAll()
//                                .requestMatchers("/api/v1/university/**").hasAnyAuthority(Role.ADMIN.name())
                                .requestMatchers("/api/v1/university/**").permitAll()
//                                .requestMatchers("/api/v1/university/get").permitAll()
                                .requestMatchers("/api/v1/faculty/**").permitAll()
                                .requestMatchers("/api/v1/department/**").permitAll()
//                                .requestMatchers("/api/v1/university/get").permitAll()
//                                .requestMatchers("/api/v1/faculty/").permitAll()
                                .anyRequest()
                                .authenticated()
                ).userDetailsService(studentDetailsImp)
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthenticationFilter , UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }
}
