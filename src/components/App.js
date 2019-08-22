import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './shared/Header';
import Home from './home/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Home}/>
    </Router>
  );
}
