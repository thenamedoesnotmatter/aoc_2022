import * as fs from "fs";

fs.readFile(
  "aoc_1.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);
    let count = 0;

    const arrayWithCounts = lines.flatMap((value) => {
      if (value !== "") {
        count += parseInt(value);
      } else {
        const currentCount = count;
        count = 0;
        return currentCount;
      }
      return [];
    });

    // star 1:
    console.log(Math.max(...arrayWithCounts));

    // star 2:
    const topThree = arrayWithCounts
      .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
      .slice(0, 3)
      .reduce((previousValue, currentValue) => previousValue + currentValue);

    console.log(topThree);
  }
);
