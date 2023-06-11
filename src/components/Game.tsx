import React, { useState } from "react";
import { GameResult } from "../types";
import { PlayRound } from "../utils/PlayRound";

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const choices = ["rock", "paper", "scissors"];

  function handlePlayerChoice(choice: string) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = PlayRound(choice, computerChoice);
    if (result === "Win") {
      setPlayerScore(playerScore + 1);
    } else if (result === "Lose") {
      setComputerScore(computerScore + 1);
    }
    setGameResult(result);
  }

  return (
    <div>
      <p>Player Score: {playerScore}</p>
      <p>Computer Score: {computerScore}</p>
      {gameResult && <p>Result: {gameResult}</p>}
      <button onClick={() => handlePlayerChoice("rock")}>Rock</button>
      <button onClick={() => handlePlayerChoice("paper")}>Paper</button>
      <button onClick={() => handlePlayerChoice("scissors")}>Scissors</button>
    </div>
  );
}

export default Game;
