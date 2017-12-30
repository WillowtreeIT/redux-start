import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';
import Questions from './Questions/';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = styled.main`
    background-color: WhiteSmoke;
`;

const Container = () => {
    return <div>
    <Header />
    <NavBar />
    <Main>
        <Questions />    
    </Main>
    </div>;
};

const Symptoms = () => {
    return <div>
    <Header />
    <NavBar />
    <Main>
    <p>Symptoms data here</p>    
    </Main>
    </div>;
};

const MyApp = () => {
        return <Router>
        <div>
        <Route exact path="/" component={Container}/>
        <Route path="/symptoms" component={Symptoms}/>
        <Footer />
        </div>
        </Router>;
};
export default MyApp