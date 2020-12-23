import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Cascade from "./components/Cascade";
import './styles/main.css'
import News from "./components/News";


function App() {
    return (
        <div className={"container"}>
            <Header />
            <Content />
            <Cascade />
            <News />
        </div>
    );
}

export default App;
