import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Your_name_movie_logo.svg/1200px-Your_name_movie_logo.svg.png" alt="logo"/>
      </header>
        <nav className="nav">
            <a className={"anchor"} href="#">
                Profile
            </a>
            <a className={"anchor"} href="#">
                Messages
            </a>
            <a className={"anchor"} href="#">
                News
            </a>
            <a className={"anchor"} href="#">
                Settings
            </a>
        </nav>
        <div className={"content"}>

        </div>
    </ div>
  );
}

export default App;
