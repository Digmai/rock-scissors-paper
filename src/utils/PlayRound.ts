import { GameResult } from "../types";

export function PlayRound(
  playerChoice: string,
  computerChoice: string
): GameResult {
  if (playerChoice === computerChoice) {
    return "Draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "Win";
  } else {
    return "Lose";
  }
}
