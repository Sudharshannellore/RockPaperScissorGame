import React, { useState } from 'react';
import './App.css';

const options = ['rock', 'paper', 'scissors'];

function App() {
  const [result, setResult] = useState({ message: '', computerChoice: null });

  const playRound = (playerSelection) => {
    const computerSelection = options[Math.floor(Math.random() * options.length)];

    if (playerSelection === computerSelection) {
      setResult({ message: "It's a tie!",computerChoice: computerSelection });
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      setResult({ message: `You win! ${playerSelection} beats ${computerSelection}`,  computerChoice: computerSelection });
    } else {
      setResult({ message: `You lose! ${computerSelection} beats ${playerSelection}`,  computerChoice: computerSelection });
    }
  };

  return (
    <div className="App">
      <h1 style={{textDecoration:'underLine'}}>Rock Paper Scissor Game</h1>
      <br />
      <div className="result">
        {result.computerChoice && (
          <div id='res'>
            <p>Computer's choice: </p>
            <img id='image1' src={`${result.computerChoice}.png`} alt={result.computerChoice.charAt(0).toUpperCase() + result.computerChoice.slice(1)} />
          </div>
        )}
       <p>{result.message}</p>
      </div>
      <div className="options">
        {options.map((option) => (
          <button key={option} className="option" onClick={() => playRound(option)}>
            <img className='image' src={`${option}.png`} alt={option.charAt(0).toUpperCase() + option.slice(1)} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
