import * as fs from "fs";

fs.readFile(
  "input/day_3.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    const alphabet_2 = alpha.map((x) => String.fromCharCode(x).toUpperCase());
    const merged = alphabet.concat(alphabet_2);

    let points = 0;

    lines.forEach((line) => {
      const half = Math.ceil(line.length / 2);
      const firstHalf = line.slice(0, half);
      const secondHalf = line.slice(half);

      let charFound = false;
      Array.from(secondHalf).forEach((char) => {
        if (!charFound) {
          const index = firstHalf.indexOf(char);
          if (index !== -1) {
            const amountOfPoints = merged.indexOf(char) + 1;
            points += amountOfPoints;
            charFound = true;
          }
        }
      });
    });

    console.log(points);
  }
);
