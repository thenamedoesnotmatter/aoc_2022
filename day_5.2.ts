import * as fs from "fs";

fs.readFile(
  "input/day_5.txt",
  "utf8",
  (err: NodeJS.ErrnoException | null, data: string) => {
    if (err) {
      return console.log(err);
    }

    const lines: Array<string> = data.split(/\r?\n/);
    const stackLines: Array<string> = [];
    const instructionLines: Array<string> = [];

    lines.forEach((line, index) => {
      if (index < 8) {
        stackLines.push(line);
      }
      if (index > 9) {
        instructionLines.push(line);
      }
    });

    const stackArray = Array(9)
      .fill(null)
      .map((item) => new Array());

    stackLines.forEach((line, index) => {
      const newLine = line.match(/.{1,4}/g)?.map((char) => {
        if (char === "    " || char === "   ") return;
        char = char.replace("[", "");
        char = char.replace("]", "");
        char = char.replace(" ", "");
        return char;
      });
      newLine?.forEach((char, idx) => {
        if (char) stackArray[idx].push(char);
      });
    });

    instructionLines.forEach((line) => {
      const digits = line.match(/\d+/g)?.map((char) => parseInt(char));
      if (digits) {
        const amount = digits[0];
        const from = digits[1];
        const to = digits[2];
        const nums = stackArray[from - 1].splice(0, amount);
        stackArray[to - 1].unshift(...nums);
      }
    });
    const chars = stackArray.map((arr) => arr[0]).join("");
    console.log(chars);
  }
);
