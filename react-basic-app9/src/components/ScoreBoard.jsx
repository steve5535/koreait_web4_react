function ScoreBoard({ scores }) {
    return (
        <section className="scoreBoard">
            <div>
                <span>X 승리</span>
                <strong>{scores.X}</strong>
            </div>

            <div>
                <span>O 승리</span>
                <strong>{scores.O}</strong>
            </div>

            <div>
                <span>무승부</span>
                <strong>{scores.draw}</strong>
            </div>
        </section>
    );
}

export default ScoreBoard;