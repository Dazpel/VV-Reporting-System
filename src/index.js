import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import formDirector from './components/form/formDirector.component'
import { ThemeProvider, CSSReset, } from "@chakra-ui/core";
import Header from './components/header/header.component';

const routing = (
  
  <Router>
      <ThemeProvider>
      <CSSReset />
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/Form" component={formDirector} />
      </ThemeProvider>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))