import React, { Component } from 'react';
import styled from 'styled-components';

const QuestionList = styled.div`
    font-size: 15pt;
`
        
const Questions = () => {
    return  <QuestionList>
    <p>What are some common 
    symptoms of melanoma? </p>
    <p>How can I prevent or manage them?</p>
    <p>What are the treatment options for my symptoms?</p>
    <p>Will certain activities make my symptoms worse?</p>
    <p>What should I do if I notice new symptoms or if 
    existing symptoms worsen?</p>
  </QuestionList>
  
}

export default Questions