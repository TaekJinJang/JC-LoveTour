import { useState } from 'react'
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reactLogo from './assets/react.svg'
import Board from './pages/Board'

const Container = styled.div`
  margin: 10px auto;
  // width: 370px;
`;

function App() {
  

  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/' Component={Board} />
        </Switch>

      </Router>


    </Container>
  )
}

export default App
