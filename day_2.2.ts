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

    enum preferredRoundFinish {
      Win = "Z",
      Draw = "Y",
      Loss = "X",
    }

    let opponentScore = 0;
    let playerScore = 0;

    lines.forEach((line) => {
      const opponentHand = line.split(" ")[0];
      const roundEnd = line.split(" ")[1];
      opponentScore += opponentHandScore[opponentHand];

      if (roundEnd === preferredRoundFinish.Win) {
        playerScore += outcomeScore.Win;

        if (opponentHand === opponentPlays.Rock) {
          playerScore += playerHandScore[playerPlays.Paper];
        }

        if (opponentHand === opponentPlays.Paper) {
          playerScore += playerHandScore[playerPlays.Scissors];
        }

        if (opponentHand === opponentPlays.Scissors) {
          playerScore += playerHandScore[playerPlays.Rock];
        }
      }

      if (roundEnd === preferredRoundFinish.Draw) {
        playerScore += outcomeScore.Draw;
        opponentScore += outcomeScore.Draw;

        if (opponentHand === opponentPlays.Rock) {
          playerScore += playerHandScore[playerPlays.Rock];
        }

        if (opponentHand === opponentPlays.Paper) {
          playerScore += playerHandScore[playerPlays.Paper];
        }

        if (opponentHand === opponentPlays.Scissors) {
          playerScore += playerHandScore[playerPlays.Scissors];
        }
      }

      if (roundEnd === preferredRoundFinish.Loss) {
        opponentScore += outcomeScore.Win;

        if (opponentHand === opponentPlays.Rock) {
          playerScore += playerHandScore[playerPlays.Scissors];
        }

        if (opponentHand === opponentPlays.Paper) {
          playerScore += playerHandScore[playerPlays.Rock];
        }

        if (opponentHand === opponentPlays.Scissors) {
          playerScore += playerHandScore[playerPlays.Paper];
        }
      }
    });

    // Star 2:
    console.log(playerScore);
  }
);
