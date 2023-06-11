import React, { useState } from "react";
import { Choices as TChoices, GameResult } from "../types";
import { PlayRound } from "../utils/PlayRound";
import { Button, Choices, Container, Result, Score } from "../styled/game";

function Game() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const choices = ["камень", "ножницы", "бумага"];

  function handlePlayerChoice(choice: TChoices) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = PlayRound(choice, computerChoice);
    if (result === "Игрок попедил") {
      setPlayerScore(playerScore + 1);
    } else if (result === "Попедил комп") {
      setComputerScore(computerScore + 1);
    }
    setGameResult(result);
  }

  return (
    <Container>
      <Score>Счет игрока: {playerScore}</Score>
      <Score>Cчет компа: {computerScore}</Score>
      {gameResult && <Result>Результат: {gameResult}</Result>}
      <Choices>
        <Button onClick={() => handlePlayerChoice("камень")}>камень</Button>
        <Button onClick={() => handlePlayerChoice("ножницы")}>ножницы</Button>
        <Button onClick={() => handlePlayerChoice("бумага")}>бумага</Button>
      </Choices>
    </Container>
  );
}

export default Game;
