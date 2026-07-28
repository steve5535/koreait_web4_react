import { useState } from 'react'
import './App.css'
import { calculateWinner, EMPTY_SQUARES, getNextPlayer, INITIAL_SCORES, isBoardFull } from './utils/game'
import Board from './components/Board';

function App() {
  const [squares, setSquares] = useState(EMPTY_SQUARES);
  const [scores, setScores] = useState(INITIAL_SCORES);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winnerInfo = calculateWinner(squares);
  const isDraw = !winnerInfo && isBoardFull(squares);
  const isGameOver = Boolean(winnerInfo) || isDraw;

  const handleSelectScore = (index) => {

    const newSquares = squares.map((value, squareIndex) => squareIndex === index ? currentPlayer : value);
    const nextWinnerInfo = calculateWinner(newSquares);
    const nextIsDraw = !winnerInfo && isBoardFull(newSquares);

    setSquares(newSquares);
    setCurrentPlayer((prevPlayer) => getNextPlayer(prevPlayer));
  }

  console.log(squares);

  return (
    <main>
      <Board
        squares={squares}
        isGameOver={isGameOver}
        onSelectSquare={handleSelectScore}
      />
    </main>
  )
}

export default App
