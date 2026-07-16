function CountButton({ setCount }) {

    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>여기는 button</p>
            <button type="button" onClick={increase}>증가</button>
        </div>
    )
}

export default CountButton
