const isValidSudoku = (board) => {
    // Check rows and columns
    for (let i = 0; i < 9; i++) {
        if (!isValidRow(board, i) || !isValidColumn(board, i)) {
            return false;
        }
    }
    // Check 3x3 sub boxes
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            if (!isValidSubBox(board, i, j)) {
                return false;
            }
        }
    }
    return true;
}


const isValidRow = (board, row) => {
    const set = new Set();

    for (let i = 0; i < 9; i++) {
        const value = board[row][i];

        // Checking the value inside row if not empty
        if (value !== ".") {
            if (set.has(value)) {
                return false; // Duplicate value in the row
            }
            set.add(value);
        }
    }

    return true;
}

// Checking for column validity
const isValidColumn = (board, col) => {
    const set = new Set();

    for (let j = 0; j < 9; j++) {
        const value = board[j][col];

        if (value !== ".") {
            if (set.has(value)) {
                return false;
            }
            set.add(value);
        }
    }

    return true;
}

const isValidSubBox = (board, startRow, startCol) => {
    const set = new Set();

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const value = board[startRow + i][startCol + j];


            if (value !== ".") {
                if (set.has(value)) {
                    return false;
                }
                set.add(value);
            }
        }
    }
    return true;
}

// Example usage:
const sudokuBoard = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(sudokuBoard)); // Output: true