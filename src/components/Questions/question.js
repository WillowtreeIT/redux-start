import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const StyledQuestion = styled.div`
    font-size: 15pt;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;
    padding-left: 20px;

    span.fa { 
        float: right;
        margin-right: 10px;
    };
`
        
const Question = (props) => {
    return  <StyledQuestion>{props.q}<Icon name="caret-right" />
    </StyledQuestion>
}

export default Question