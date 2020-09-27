import React from "react";
import "../styles/App.scss";
import UsersBoard from "./UsersBoard";
import mickeyhead from "../mickeyheadoutline.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Disney Board</h1>
        <img src={mickeyhead} alt="mickey head outline"></img>
      </header>
      <div>
        <UsersBoard />
      </div>
    </div>
  );
}

export default App;
