import { useReducer, useState } from "react";

const initScore = 0;

function scoreReducer(score, dispatch) {

    switch (dispatch.type) {
        case "ADD_SCORE": {
            return score + dispatch.payload;
        }
        case "MINUS_SCORE": {
            return score - dispatch.payload;
        }
        default: {
            return score;
        }
    }

}

function ScoreBoard() {
    // const [score, setScore] = useState(0);

    const [score, dispatch] = useReducer(scoreReducer, initScore)

    const handleAddOne = () => {
        setScore((prevScore) => prevScore + 1)
    }

    const handleAddThree = () => {
        setScore((prevScore) => prevScore + 3)
    }

    const handleSubtractOne = () => {
        setScore((prevScore) => prevScore - 1)
    }

    return (
        <div>
            <p>현재 점수: {score}</p>
            <button type="button" onClick={() => dispatch({
                type: "ADD_SCORE",
                payload: 1
            })}>1점 추가</button>
            <button type="button" onClick={() => dispatch({
                type: "ADD_SCORE",
                payload: 3
            })}>3점 추가</button>
            <button type="button" onClick={() => dispatch({
                type: "MINUS_SCORE",
                payload: 1
            })}>1점 차감</button>
        </div>
    )
}

export default ScoreBoard
