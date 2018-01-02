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
`       
const Header = (props) => {
    return <StyledHeader>
    <table>
    <tbody>
        <tr>
            <td><img src={logo} width="100px" alt="MacMillan"/></td>
            <td><h1>{props.header}</h1></td>
        </tr>
    </tbody>
    </table>
    </StyledHeader>
}

export default Header