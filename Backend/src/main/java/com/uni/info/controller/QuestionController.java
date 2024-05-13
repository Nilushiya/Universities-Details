package com.uni.info.controller;

import com.uni.info.dto.QuestionDto;
import com.uni.info.entity.Question;
import com.uni.info.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/question")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @PostMapping("/")
    public String userQuestion(@RequestBody QuestionDto questionDto){
        questionService.questions(questionDto);
        return "okay";
    }
    @GetMapping("/")
    public List<Question> getQuestion(){
        return questionService.getUserQuestions();
    }
    @DeleteMapping("/delete/{question_id}")
    public String deleteQuestion(@PathVariable Long question_id){
        questionService.deleteUserQuestion(question_id);
        return "Delete okay";
    }
}
