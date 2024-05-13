package com.uni.info.service;

import com.uni.info.dto.QuestionDto;
import com.uni.info.entity.Question;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionService {
    void questions(QuestionDto questionDto);

    List<Question> getUserQuestions();

    void deleteUserQuestion(Long question_id);
}
