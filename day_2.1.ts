import * as fs from "fs";

fs.readFile(
  "input/day_2.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);

    enum opponentPlays {
      Rock = "A",
      Paper = "B",
      Scissors = "C",
    }

    enum playerPlays {
      Rock = "X",
      Paper = "Y",
      Scissors = "Z",
    }

    enum outcomeScore {
      Win = 6,
      Draw = 3,
      Loss = 0,
    }

    const opponentHandScore: { [key: string]: number } = {
      A: 1,
      B: 2,
      C: 3,
    };

    const playerHandScore: { [key: string]: number } = {
      X: 1,
      Y: 2,
      Z: 3,
    };

    let opponentScore = 0;
    let playerScore = 0;

    lines.forEach((line) => {
      const opponentHand = line.split(" ")[0];
      const playerHand = line.split(" ")[1];
      const playerWins =
        (opponentHand === opponentPlays.Rock &&
          playerHand === playerPlays.Paper) ||
        (opponentHand === opponentPlays.Paper &&
          playerHand === playerPlays.Scissors) ||
        (opponentHand === opponentPlays.Scissors &&
          playerHand === playerPlays.Rock);
      const playerDraws =
        (opponentHand === opponentPlays.Rock &&
          playerHand === playerPlays.Rock) ||
        (opponentHand === opponentPlays.Paper &&
          playerHand === playerPlays.Paper) ||
        (opponentHand === opponentPlays.Scissors &&
          playerHand === playerPlays.Scissors);
      const playerLoses =
        (opponentHand === opponentPlays.Rock &&
          playerHand === playerPlays.Scissors) ||
        (opponentHand === opponentPlays.Paper &&
          playerHand === playerPlays.Rock) ||
        (opponentHand === opponentPlays.Scissors &&
          playerHand === playerPlays.Paper);

      opponentScore += opponentHandScore[opponentHand];
      playerScore += playerHandScore[playerHand];

      if (playerWins) {
        playerScore += outcomeScore.Win;
      }

      if (playerDraws) {
        playerScore += outcomeScore.Draw;
        opponentScore += outcomeScore.Draw;
      }

      if (playerLoses) {
        opponentScore += outcomeScore.Win;
      }
    });

    // Star 1:
    console.log(playerScore);
  }
);
