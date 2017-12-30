import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';
import Questions from './Questions/';
import Survey from './Survey';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Main = styled.main`
    background-color: WhiteSmoke;
`;

const QuestionPage = () => {
    return <div>
    <NavBar />
    <Main>
        <Questions />    
    </Main>
    </div>;
};

const SymptomPage = () => {
    return <div>
    <NavBar />
    <Main>
    <p>Symptoms data here</p>    
    </Main>
    </div>;
};

const SurveyPage = () => {
   return <div>
    <NavBar />
    <Main>
    <Survey />   
    </Main>
    </div>;
}


const MyApp = () => {
        return <Router>
        <div>
        <Header />
        <Route path="/questions" component={QuestionPage}/>
        <Route path="/symptoms" component={SymptomPage}/>
        <Route path="/survey" component={SurveyPage}/>
        <Footer />
        </div>
        </Router>;
};
export default MyApp