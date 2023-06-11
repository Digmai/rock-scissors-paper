import { GameResult } from "../types";

export function PlayRound(
  playerChoice: string,
  computerChoice: string
): GameResult {
  if (playerChoice === computerChoice) {
    return "Ничья";
  } else if (
    (playerChoice === "камень" && computerChoice === "ножницы") ||
    (playerChoice === "ножницы" && computerChoice === "бумага") ||
    (playerChoice === "бумага" && computerChoice === "камень")
  ) {
    return "Игрок попедил";
  } else {
    return "Попедил комп";
  }
}
