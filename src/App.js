import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import IssueList from './components/IssueList/IssueList';
import DetailIssue from './components/DetailIssue/DetailIssue';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={IssueList} />
      <Route path='/issue/:issueNumber' component={DetailIssue} />
    </Switch>
  );
}

export default App;
