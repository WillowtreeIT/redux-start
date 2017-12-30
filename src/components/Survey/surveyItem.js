import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-fontawesome';

const StyledItem = styled.div`
    font-size: 15pt;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid gray;
    padding-left: 20px;

    .question {
        display: inline-block;
        width: 60%;
    }

    .answers {
        display: inline-block;
        width: 30%;
    }

    .detail {
        font-size: 8pt;
    }
`;
        
const SurveyItem = (props) => {
    
    const myId = 'id' + props.myKey;
    const q = props.q;
    if (q.responses) {
        return <StyledItem>
        <div className="question">
            {q.text}
        </div>
        <div className="answers">
            <label for={myId + 'y'}>Yes</label>
            <input id={myId + 'y'} name={myId} type="radio" value="yes" />
            <label for={myId + 'n'}>No</label>
            <input id={myId + 'n'} name={myId} type="radio" value="no" />
        </div>
        {q.detail? <div className="detail">
                {q.detail}
                </div> : null }
        </StyledItem>;
    }
    
    const queryList =  q.queries.map( (subq) => (
        <div>
            <div className="question">- {subq.text}</div>
            <div className="answers">
                <label for={myId + 'y'}>Yes</label>
                <input id={myId + 'y'} name={myId} type="radio" value="yes" />
                <label for={myId + 'n'}>No</label>
                <input id={myId + 'n'} name={myId} type="radio" value="no" />
            </div>
        </div>            
        )
    );
    
    return <StyledItem>
        <div>
            {q.text}
        </div>
        <div className="queries">
            {queryList}
        </div>
        {q.detail? <div className="detail">
            {q.detail}
        </div> : null }
    </StyledItem>;
};

export default SurveyItem