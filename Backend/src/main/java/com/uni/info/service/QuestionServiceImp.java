package com.uni.info.service;

import com.uni.info.dto.QuestionDto;
import com.uni.info.entity.Question;
import com.uni.info.repository.QuestionRepo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImp implements QuestionService{
    @Autowired
    private QuestionRepo questionRepo;
    @Override
    public void questions(QuestionDto questionDto) {

        Question question = new Question();
        BeanUtils.copyProperties(questionDto , question);
        System.out.println("Okaby");
        questionRepo.save(question);
    }

    @Override
    public List<Question> getUserQuestions() {
        return questionRepo.findAll();
    }

    @Override
    public void deleteUserQuestion(Long question_id) {
        questionRepo.deleteById(question_id);
    }
}
