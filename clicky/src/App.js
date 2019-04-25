import React from "react";
import "./App.css";

function App() {
  // let array = [array of pictures]
  // let choosenOne = "" math.random for a selected picture from array
  // let score = 0;
  // let highScore = 0;

  highScore = () => {
    // code to keep high score, even after restart
  };
  handleOnClick = e => {
    e.PreventDefault;
    // if clicked picture matches choosenOne add +1 to score

    // else reset count but keep high score{
    // reset()
    // }
  };

  loadPictures = () => {
    // loop through array and populate pictures <div>
    // shuffle array
    handleOnClick();
  };

  reset = () => {
    score = 0;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Click an image to earn a point.</h1>
        <h3>Don't click to wrong one....</h3>
      </header>
      <div className="score">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div className="pictures">
        <button>{loadPictures}</button>
      </div>
    </div>
  );
}

export default App;
