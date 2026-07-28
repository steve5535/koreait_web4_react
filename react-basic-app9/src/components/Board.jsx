import Square from "./Square"

function Board({ squares, isGameOver, onSelectSquare }) {
    return (
        <div>
            {squares.map((value, index) => {
                return (
                    <Square
                        key={index}
                        value={value}
                        index={index}
                        onSelect={onSelectSquare}
                    />
                )
            })}
        </div>
    )
}

export default Board
