function ErrorMessage({ message = "요청을 처리하는중 문제가 발생" }) {
    return (
        <div className="statusBox error">
            <p>{message}</p>
        </div>
    )
}

export default ErrorMessage
