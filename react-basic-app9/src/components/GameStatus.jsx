function GameStatus({ winnerInfo, isDraw, currentPlayer }) {
    if (winnerInfo) {
        return (
            <section className="statusCard winner">
                <p>게임 종료</p>
                <h2>{winnerInfo.winner}가 승리했습니다.</h2>
                <span>승리한 줄이 보드에 강조 표시됩니다.</span>
            </section>
        );
    }

    if (isDraw) {
        return (
            <section className="statusCard draw">
                <p>게임 종료</p>
                <h2>무승부입니다.</h2>
                <span>모든 칸이 채워졌지만 승자가 없습니다.</span>
            </section>
        );
    }

    return (
        <section className="statusCard">
            <p>현재 차례</p>
            <h2>{currentPlayer}</h2>
            <span>빈 칸을 선택해 표시를 남겨보세요.</span>
        </section>
    );
}

export default GameStatus;