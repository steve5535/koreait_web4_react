export const EMPTY_SQUARES = Array(9).fill(null);

const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export function calculateWinner(squares) {
    for (const line of WINNING_LINES) {
        const [a, b, c] = line;
        if (squares[a] &&
            squares[a] == squares[b] &&
            squares[a] == squares[c]
        ) {
            return {
                winner: squares[a],
                line
            }
        }
    }
    return null;
}

export const INITIAL_SCORES = {
    X: 0,
    O: 0,
    draw: 0
}

export function isBoardFull(squares) {
    return squares.every(Boolean)
}

export function getNextPlayer(currentPlayer) {
    return currentPlayer === "X" ? "O" : "X";
}