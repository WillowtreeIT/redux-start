import React, { Component } from 'react';
import styled from 'styled-components';


const Bar = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

const Link = styled.li`
    float: left;

a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

a:hover {
    background-color: #111;
}
`

const NavBar = () => {
    return  <Bar>
  <Link><a href="default.asp">Symptoms</a></Link>
  <Link><a href="treatments.asp">Treatments</a></Link>
  <Link><a href="diagnosis.asp">Diagnosis</a></Link>
  <Link><a href="stages.asp">Stages</a></Link>
  </Bar>
  
}



export default NavBar