function Square({ value, index, isWinning, disabled, onSelect }) {
    return (
        <button
            type="button"
            className={`square${value ? "filled" : ""}${isWinning ? "winning" : ""}`}
            onClick={() => onSelect(index)}
            disabled={disabled}
            aria-label={`${index + 1}번 칸`}
        >
            {value}
        </button>
    );
}

export default Square;