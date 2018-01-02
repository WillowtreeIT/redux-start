import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import NavBar from './NavBar';
import Questions from './Questions/';
import Survey from './Survey';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Main = styled.main`
    background-color: WhiteSmoke;
    padding-top: 10px;
    padding-bottom: 10px;
    min-height: 300px;
`;

const QuestionPage = () => {
    return <div>
        <Header header="Questions"/>
        <NavBar />
        <Main>
            <Questions />    
        </Main>
    </div>;
};

const SymptomPage = () => {
    return <div>
        <Header header="Symptoms"/>
        <NavBar />
        <Main>
            <p>Symptoms data here</p>    
        </Main>
    </div>;
};

const SurveyPage = () => {
    return <div>
        <Header header="Survey"/>
        <NavBar />
        <Main>
            <Survey />   
        </Main>
    </div>;
};

const DefaultPage = (props) => {
    return <div>
        <Header header={props.header}/>
        <NavBar />
        <Main>
        </Main>
    </div>;
};

const MyApp = () => {
    return <Router>
        <div>
            <Switch>
            <Route path="/questions" component={QuestionPage}/>
            <Route path="/symptoms" component={SymptomPage}/>
            <Route path="/treatments" render={props => ( <DefaultPage header="Treatments"/> )} />
            <Route path="/diagnosis" render={props => ( <DefaultPage header="Diagnosis"/> )} />
            <Route path="/stages" render={props => ( <DefaultPage header="Stages"/> )}/>
    
            <Route path="/dashboard" render={props => ( <DefaultPage header="Dashboard"/> )}/>
            <Route path="/survey" component={SurveyPage} />
            <Route path="/network" render={props => ( <DefaultPage header="Network"/> )}/>
            <Route render={props => ( <DefaultPage header="Home"/> )}/>
            </Switch>
            <Footer />
        </div>
    </Router>;
};
export default MyApp