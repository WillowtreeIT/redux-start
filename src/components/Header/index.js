import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/macmillan-white-midgreen.jpg';

const StyledHeader = styled.header`
    background-color: rgb(0, 162, 70);
    h1 {
        margin-top: 0px;
        margin-bottom: 0px;
        text-align: center;
    }
`;

const Header = () => {
    return <StyledHeader>
    <img src={logo} width="100px" alt="MacMillan"/><h1>Checklist Questions</h1>
    </StyledHeader>
}

export default Header