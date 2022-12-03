import * as fs from "fs";

fs.readFile(
  "input/day_3.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);
    const arrayOfChunks: Array<Array<string>> = [];

    while (lines.length > 0) {
      const chunk: Array<string> = lines.splice(0, 3);
      arrayOfChunks.push(chunk);
    }

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    const alphabet_2 = alpha.map((x) => String.fromCharCode(x).toUpperCase());
    const merged = alphabet.concat(alphabet_2);

    let points = 0;

    arrayOfChunks.forEach((chunk) => {
      let charFound = false;
      Array.from(chunk[0]).forEach((char) => {
        if (!charFound) {
          const firstIndex = chunk[1].indexOf(char);
          const secondIndex = chunk[2].indexOf(char);
          if (firstIndex !== -1 && secondIndex !== -1) {
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
