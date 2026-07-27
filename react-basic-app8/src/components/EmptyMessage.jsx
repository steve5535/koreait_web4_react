function EmptyMessage({ message = "표시할 데이터가 없습니다." }) {
    return (
        <div className="statusBox empty">
            <p>{message}</p>
        </div>
    )
}

export default EmptyMessage
