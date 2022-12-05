import * as fs from "fs";

const paddedRangeString = (start: number, end: number) => {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx)
    .map((num) => (num < 10 ? `0${num}` : `${num}`))
    .toString();
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
      const firstPairString = paddedRangeString(
        parseInt(firstPair.split("-")[0]),
        parseInt(firstPair.split("-")[1])
      );
      const secondPairString = paddedRangeString(
        parseInt(secondPair.split("-")[0]),
        parseInt(secondPair.split("-")[1])
      );
      if (
        firstPairString.indexOf(secondPairString) !== -1 ||
        secondPairString.indexOf(firstPairString) !== -1
      ) {
        return true;
      }
      return [];
    });
    console.log(incorrectPairs.length);
  }
);
