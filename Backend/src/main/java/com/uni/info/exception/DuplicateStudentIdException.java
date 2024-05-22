package com.uni.info.exception;

public class DuplicateStudentIdException extends RuntimeException{
    public DuplicateStudentIdException(String message) {
        super(message);
    }
}
