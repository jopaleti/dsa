const processData = (input) => {
    const phonebook = {};
    const output = [];
    /**
     * Since the first line denotes contains an integer denoting the number 
     * of entries in the phonebook
     */

    const numberOfEntries = parseInt(input[0]);

    // Populate the phonebook
    for (let i = 1; i <= numberOfEntries; i++){
        const [name, number] = input[i].split(" ");
        phonebook[name] = number;
    }
    
    // Process the query
    for (let i = numberOfEntries + 1; i < input.length; i++) {
        // Remember the query values come after the given number of entries
        const query = input[i];
        
        // Check whether the entry exist in the phonebook storage
        const result = phonebook[query];
        
        if (result !== undefined) {
            output.push(`${query}=${result}`);
        } else {
            output.push("Not found");
        }
    }

    return output;
}

// Example usage:
const input = [
    '3',
    'sam 99912222',
    'tom 11122222',
    'harry 12299933',
    'sam',
    'edward',
    'harry'
];

const output = processData(input);
console.log(output.join("\n"));