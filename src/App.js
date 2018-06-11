import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import ArticleBody from './ArticleBody'
import AdSection from './AdSection'

class App extends Component {
  render() {
    return (
      <body>
        <Header />
  
        <ArticleBody />
  
        <AdSection />
  
      
    </body>
    );
  }
}

export default App;
