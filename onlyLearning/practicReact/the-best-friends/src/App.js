import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import './styles/main.css'

function App() {
    return (
        <div className={"container"}>
            <Header />
            <Content />
        </div>
    );
}

export default App;
