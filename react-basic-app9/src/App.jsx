import { useState } from "react";
import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import ScoreBoard from "./components/ScoreBoard";
import {
  EMPTY_SQUARES,
  INITIAL_SCORES,
  calculateWinner,
  getNextPlayer,
  isBoardFull,
} from "./utils/game";
import "./App.css";

function App() {
  const [squares, setSquares] = useState(EMPTY_SQUARES);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scores, setScores] = useState(INITIAL_SCORES);

  const winnerInfo = calculateWinner(squares);
  const isDraw = !winnerInfo && isBoardFull(squares);
  const isGameOver = Boolean(winnerInfo) || isDraw;
  const winningLine = winnerInfo?.line ?? [];

  const handleSelectSquare = (index) => {
    if (squares[index] || isGameOver) {
      return;
    }

    const nextSquares = squares.map((value, squareIndex) =>
      squareIndex === index ? currentPlayer : value
    );

    const nextWinnerInfo = calculateWinner(nextSquares);
    const nextIsDraw = !nextWinnerInfo && isBoardFull(nextSquares);

    setSquares(nextSquares);

    if (nextWinnerInfo) {
      setScores((prevScores) => ({
        ...prevScores,
        [nextWinnerInfo.winner]: prevScores[nextWinnerInfo.winner] + 1,
      }));
      return;
    }

    if (nextIsDraw) {
      setScores((prevScores) => ({
        ...prevScores,
        draw: prevScores.draw + 1,
      }));
      return;
    }

    setCurrentPlayer((prevPlayer) => getNextPlayer(prevPlayer));
  };

  const handleResetBoard = () => {
    setSquares(EMPTY_SQUARES);
    setCurrentPlayer("X");
  };

  const handleResetScores = () => {
    setScores(INITIAL_SCORES);
    handleResetBoard();
  };

  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">React 11일차</p>
        <h1>틱택토 미니 프로젝트</h1>
        <span>
          배열 state, 이벤트 처리, 조건부 렌더링, 승리 조건 계산을 조합해
          작은 게임을 만듭니다.
        </span>
      </header>

      <section className="gameLayout">
        <div className="sidePanel">
          <GameStatus
            winnerInfo={winnerInfo}
            isDraw={isDraw}
            currentPlayer={currentPlayer}
          />

          <ScoreBoard scores={scores} />

          <div className="controlPanel">
            <button type="button" onClick={handleResetBoard}>
              다시 시작
            </button>

            <button type="button" onClick={handleResetScores}>
              점수 초기화
            </button>
          </div>
        </div>

        <Board
          squares={squares}
          winningLine={winningLine}
          isGameOver={isGameOver}
          onSelectSquare={handleSelectSquare}
        />
      </section>
    </main>
  );
}

export default App;