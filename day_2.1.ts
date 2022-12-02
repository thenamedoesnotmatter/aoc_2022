import * as fs from "fs";

fs.readFile(
  "input/day_2.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);

    const scores: { [key: string]: number } = {
      "A X": 1 + 3, // Rock - Rock
      "A Y": 2 + 6, // Rock - Paper
      "A Z": 3 + 0, // Rock - Scissors
      "B X": 1 + 0, // Paper - Rock
      "B Y": 2 + 3, // Paper - Paper
      "B Z": 3 + 6, // Paper - Scissors
      "C X": 1 + 6, // Scissors - Rock
      "C Y": 2 + 0, // Scissors - Paper
      "C Z": 3 + 3, // Scissors - Scissors
    };

    const playerScore = lines.reduce((acc, line) => {
      return acc + scores[line];
    }, 0);

    // Star 1:
    console.log(playerScore);
  }
);
