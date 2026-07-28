function Square({ value, index, onSelect }) {
    return (
        <div>
            <button
                onClick={() => onSelect(index)}
            >
                값{value}
            </button>
        </div>
    )
}

export default Square
