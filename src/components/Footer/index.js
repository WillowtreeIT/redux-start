import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #dad9d3;
    padding: 10px;
    display: flex;
    flex-direction: row;

    h1 {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .col {
        display: inline-block;
        flex-grow: 1;
    }

    a {
        font-weight: bold;
        color: black;
        text-decoration: none;
    }
`;

const items = [
    { text: "Dashboard", link: '/dashboard'},
    { text: "My Status", link: '/status'},
    { text: "Take Survey", link: '/survey'},
    { text: "Network", link: '/network' }
];

const Footer = () => {
    const list = items.map( (item, index) =>
    <div key={index} className="col">
    <Link to={item.link}>{item.text}</Link>
    </div>
    );
    
    return <StyledFooter>
    {list}
    </StyledFooter>;
};

export default Footer