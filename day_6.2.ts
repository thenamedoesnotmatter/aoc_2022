import * as fs from "fs";

const startOfPacketOffset = 14;

fs.readFile(
  "input/day_6.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const line: string = data;

    let firstMarker: number = 0;

    Array.from(line).forEach((value, index) => {
      const lastCharIndex = index + startOfPacketOffset;
      const setToCheck = new Set(line.slice(index, lastCharIndex));
      if (setToCheck.size === startOfPacketOffset && !firstMarker) {
        firstMarker = lastCharIndex;
      }
    });

    console.log(firstMarker);
  }
);
