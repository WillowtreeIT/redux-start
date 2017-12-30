import React, { Component } from 'react';
import Question from './question.js';
import styled from 'styled-components';

const QuestionList = styled.div`
    font-size: 15pt;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const questions = [
    "What are some common symptoms of melanoma?",
    "How can I prevent or manage them?",
    "What are the treatment options for my symptoms?",
    "Will certain activities make my symptoms worse?",
    "What should I do if I notice new symptoms or if existing symptoms worsen?"
];
        
const Questions = () => {
    
    const list = questions.map( (q) => <Question q={q} /> );
    return  <QuestionList>
    {list}
  </QuestionList>;
  
};
  

export default Questions