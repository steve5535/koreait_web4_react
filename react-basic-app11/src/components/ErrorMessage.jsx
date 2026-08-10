function ErrorMessage({
    message = "요청을 처리하는 중 문제가 발생했습니다."
}) {
    return (
        <div className="statusBox error">
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;