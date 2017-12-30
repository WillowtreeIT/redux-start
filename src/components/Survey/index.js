import React, { Component } from 'react';
import SurveyItem from './surveyItem.js';
import styled from 'styled-components';

const QuestionList = styled.form`
    font-size: 15pt;
    padding-top: 20px;
    padding-bottom: 20px;
    color:green;
`;

const sections = [
    {
        text: "Do you have difficulty controlling your bowels (having a poo), such as:",
        queries: [
            { 
                text: 'Having to get up at night to poo',
                responses: 'Yes,No'
            },
            {
                text: 'Having accidents such as soiling or a sensation of wetness ("wet wind")',
                responses: 'Yes,No'
            }
        ]
    },
    {
        text: "Have you noticed any blood from your bottom recently (any amount or frequency)?",
        responses: 'Yes,No'
    },
    {
        text: "Do you have any bowel or tummy problems that affect your mood, social life, relationships or any other aspect of your daily life?",
        responses: 'Yes,No',
        detail: 'e.g. do you avoid any activities or situations - travel, work, social life or hobbies? Do you take continence supplies or spare clothing with you when you go out? Have you made any dietary changes? Do you need to allow for frequency or urgency of needing the toilet?)'
    }
];
        
const Survey = () => {
    
    const list = sections.map( (q, index) => <SurveyItem key={index} myKey={index} q={q} /> );
    return  <QuestionList>
    {list}
  </QuestionList>;
  
};
  

export default Survey