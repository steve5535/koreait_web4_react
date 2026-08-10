function LoadingMessage({ message = "데이터를 불러오는 중입니다." }) {
    return (
        <div className="statusBox">
            <p>{message}</p>
        </div>
    );
}

export default LoadingMessage;