import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Welcome from './Welcome';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Welcome}/>
    </Router>
  );
}
