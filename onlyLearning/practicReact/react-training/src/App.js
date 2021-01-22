import React from "react";
import './App.css';
import Header from './components/Header/index';
import Menu from './components/Menu/index';
import Content from './components/Content/index';

function App() {
  return (
    <div className="App">
        <Header />
        <Menu />
        <Content />
    </ div>
  );
}

export default App;
