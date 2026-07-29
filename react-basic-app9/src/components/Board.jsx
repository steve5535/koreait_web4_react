import Square from "./Square";

function Board({ squares, winningLine, isGameOver, onSelectSquare }) {
    return (
        <div className="board" aria-label="틱택토 보드">
            {squares.map((value, index) => {
                const isWinning = winningLine.includes(index);
                const disabled = Boolean(value) || isGameOver;

                return (
                    <Square
                        key={index}
                        value={value}
                        index={index}
                        isWinning={isWinning}
                        disabled={disabled}
                        onSelect={onSelectSquare}
                    />
                );
            })}
        </div>
    );
}

export default Board;