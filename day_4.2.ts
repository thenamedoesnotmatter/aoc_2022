import * as fs from "fs";

const paddedRangeStringArray = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx)
    .map((num) => (num < 10 ? `0${num}` : `${num}`));
};

fs.readFile(
  "input/day_4.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);

    const incorrectPairs = lines.flatMap((line) => {
      const pairs = line.split(",");
      const firstPair = pairs[0];
      const secondPair = pairs[1];
      const firstPairArray = paddedRangeStringArray(
        parseInt(firstPair.split("-")[0]),
        parseInt(firstPair.split("-")[1])
      );
      const secondPairArray = paddedRangeStringArray(
        parseInt(secondPair.split("-")[0]),
        parseInt(secondPair.split("-")[1])
      );

      let overlaps = false;
      firstPairArray.forEach((num: string) => {
        if (secondPairArray.indexOf(num) !== -1) {
          overlaps = true;
        }
      });

      if (overlaps) return true;
      return [];
    });
    console.log(incorrectPairs.length);
  }
);
