function Pagination({
    page,
    totalPages,
    totalItems,
    prevPage,
    nextPage,
    isFetching = false,
    onPageChange,
}) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav className="pagination" aria-label="게시글 페이지네이션">
            <button
                type="button"
                onClick={() => onPageChange(prevPage)}
                disabled={!prevPage || isFetching}
            >
                이전
            </button>

            <span>
                {page} / {totalPages} 페이지 · 총 {totalItems}개
            </span>

            <button
                type="button"
                onClick={() => onPageChange(nextPage)}
                disabled={!nextPage || isFetching}
            >
                다음
            </button>
        </nav>
    );
}

export default Pagination;