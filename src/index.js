import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import injuryReport from "./components/form/injuryReport.component";
import incidentReport from "./components/form/incidentReport.component";
import Directory from './components/form/formDirectory.component'
import { ThemeProvider, CSSReset, } from "@chakra-ui/core";
import Header from './components/header/header.component';

const routing = (
  
  <Router>
      <ThemeProvider>
      <CSSReset />
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/Directory" component={Directory} />
      <Route path="/InjuryReport" component={injuryReport} />
      <Route path="/IncidentReport" component={incidentReport} />
      
      </ThemeProvider>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))