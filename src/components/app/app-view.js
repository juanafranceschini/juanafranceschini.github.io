import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

import Header from '../header';
import Footer from '../footer';

import Home from '../home';
import About from '../about';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
