import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Cascade from "./components/Cascade";
import './styles/main.css'


function App() {
    return (
        <div className={"container"}>
            <Header />
            <Content />
            <Cascade />
        </div>
    );
}

export default App;
