function TodoStats({ stats }) {
    return (
        <section className="statsGrid">
            <div>
                <span>전체</span>
                <strong>{stats.totalCount}</strong>
            </div>

            <div>
                <span>진행 중</span>
                <strong>{stats.activeCount}</strong>
            </div>

            <div>
                <span>완료</span>
                <strong>{stats.completedCount}</strong>
            </div>

            <div>
                <span>진행률</span>
                <strong>{stats.progress}%</strong>
            </div>
        </section>
    );
}

export default TodoStats;