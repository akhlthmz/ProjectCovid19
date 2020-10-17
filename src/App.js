import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
//Components
import Dashboard from "./components/Dashboard"


function App() {
  
  return (
    <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
  );
}

export default App;
