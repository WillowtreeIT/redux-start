import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';
import Questions from './Questions/';
import Footer from './Footer';

const Main = styled.main`
    background-color: WhiteSmoke;
`

const Container = () => {
    return <div>
    <Header />
    <NavBar />
    <Main>
        <Questions />    
    </Main>
    <Footer />
    </div>
}

export default Container