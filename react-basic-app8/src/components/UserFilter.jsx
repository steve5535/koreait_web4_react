function UserFilter({
    users,
    selectedUserId,
    isFetching = false,
    onChangeUser,
    onRefresh,
}) {
    return (
        <section className="filterPanel">
            <div>
                <h2>사용자 필터</h2>
                <p>
                    사용자를 선택하면 해당 사용자의 게시글만 조회합니다.
                </p>
            </div>

            <div className="filterControls">
                <select
                    value={selectedUserId}
                    onChange={(event) => onChangeUser(event.target.value)}
                >
                    <option value="">전체 사용자</option>

                    {users.map((user) => (
                        <option key={user.id} value={String(user.id)}>
                            {user.name}
                        </option>
                    ))}
                </select>

                <button type="button" onClick={onRefresh} disabled={isFetching}>
                    {isFetching ? "새로고침 중..." : "목록 새로고침"}
                </button>
            </div>
        </section>
    );
}

export default UserFilter;