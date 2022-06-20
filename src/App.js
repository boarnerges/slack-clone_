import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chat from './Components/Chat'
import Login from './Components/Login'
import styled from 'styled-components'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header/>   
          <Main>
            <Sidebar/>
             <Switch>
              <Route path = "/room">
                <Chat />
              </Route>
              <Route path="/">
                <Login />
              </Route>
             </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: orange;
    display: grid;
    grid-template-rows: 38px auto;
`
const Main = styled.div`
background: blue;
height
`