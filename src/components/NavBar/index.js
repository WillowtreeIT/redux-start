import React, { Component } from 'react';
import styled from 'styled-components';


const Bar = styled.nav`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    display: flex;
    flex-direction: row;

    .col {
        display: inline-block;
        flex-grow: 1;
    }

    a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    a:hover {
        background-color:
        #f18315
    }
`

const items = [
    { text: "Symptoms", link: '/symptoms'},
    { text: "Treatments", link: '/treatments'},
    { text: "Diagnosis", link: '/diagnosis'},
    { text: "Stages", link: '/stages' }
];
const NavBar = () => {
    const list = items.map( (item) =>
        <div className="col">
        <a href={item.link}>{item.text}</a>
        </div>
    );
    
    return  <Bar>
    {list}
  </Bar>
  
}






export default NavBar