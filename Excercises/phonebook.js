const processData = (input) => {
  const phonebook = {};
  const output = [];

  /**
   * Since the first line denotes contains an integer denoting the number
   * of entries in the phonebook
   */

  const inputLines = input.split("\n");
  console.log(inputLines);

  const numberOfEntries = parseInt(inputLines[0]);

  // Populate the phonebook
  for (let i = 1; i <= numberOfEntries; i++) {
    const [name, number] = inputLines[i].split(" ");
    phonebook[name] = number;
  }

  // Process the query
  for (let i = numberOfEntries + 1; i < inputLines.length; i++) {
    // Remember the query values come after the given number of entries
    const query = inputLines[i];

    // Check whether the entry exists in the phonebook storage
    const result = phonebook[query];

    if (result !== undefined) {
      output.push(`${query}=${result}`);
    } else {
      output.push("Not found");
    }
  }

  console.log(output.join("\n"));
};

// Example usage:
const input =
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry\n";

const output = processData(input);
output;
